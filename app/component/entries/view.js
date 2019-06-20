import { View, CollectionView } from 'backbone.marionette';
import {RouterLink} from 'marionette.routing';
import '../../assets/styles/entry.scss';

const entryHtml = `
<div>
      <h1 className="title">{model:firstName}</h1>
      <div className="meta">
        <div className="avatar" entry-letter={model:firstName}>
        </div>
        <div className="date">
          <i className="fa fa-calendar"></i> <span>{model:lastName}</span>
        </div>
      </div>
    </div>`;
// const itemHtml = `
//         <a>
//           <h4 class="list-group-item-heading">{model:firstName} {model:lastName}</h4>
//           <p class="list-group-item-text">{model:email}</p>
//         </a>`;

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
    outlet: '.entry-outlet'
  },
  initialize(options) {
    this.entries = options.entries
  },
  onRender() {
    this.showChildView('entrylist', new EntryListView({collection: this.entries}))
  }
})


