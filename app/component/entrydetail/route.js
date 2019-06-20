import {Route} from 'marionette.routing';
import _ from 'underscore';
import EntryDetailView from './view';

export default Route.extend({
  activate(transition) {
    let entries = this.getContext().request('entries');
    this.entry = entries.findWhere({id: +transition.params.entryid});
    if (!this.entry) {
      throw new Error('Unable to resolve entry with id', transition.params.entryid);
    }
  },

  viewClass: EntryDetailView,

  viewOptions() {
    return {
      model: this.entry.clone()
    }
  },

  viewEvents: {
    'save:model': 'onSaveModel'
  },

  onSaveModel(view) {
    let attributes = _.clone(view.model.attributes);
    this.entry.clear({silent: true}).set(attributes);
  }

})
