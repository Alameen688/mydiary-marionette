import { View, CollectionView } from 'backbone.marionette';
import {RouterLink} from 'marionette.routing';
import '../../assets/styles/entry.scss';

const entryHtml = `
<div>
      <h1 className="title">{model:title}</h1>
      <div className="meta">
        <div className="date">
          <i className="fa fa-calendar"></i> <span>{model:date}</span>
        </div>
      </div>
    </div>`;

const EntryItemView = View.extend({
  tagName: 'a',
  className: 'item',
  attributes: {
    route: 'entrydetail',
    'rv-param-entryid': 'model:id'
  },
  template: entryHtml
});

const EntryListView = CollectionView.extend({
  tagName: 'div',
  className: 'entry-grid',
  childView: EntryItemView,
  behaviors: [RouterLink]
});

export default View.extend({
  template: require('./template.html'),
  regions: {
    entrylist: '#grid-box',
    outlet: '#entry-content-box'
  },
  initialize(options) {
    this.entries = options.entries
  },
  onRender() {
    this.showChildView('entrylist', new EntryListView({collection: this.entries}))
  }
})


