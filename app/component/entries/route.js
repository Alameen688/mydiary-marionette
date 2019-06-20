import {Route} from 'marionette.routing';
import Radio from 'backbone.radio';
import {Entries} from '../../entities';
import EntriesView from './view';

export default Route.extend({
  activate() {
    let entriesPromise = Radio.channel('api').request('getEntryList');
    return entriesPromise.then(entriesData => {
      this.entries = new Entries(entriesData)
    });
  },

  viewClass: EntriesView,

  viewOptions() {
    return {
      entries: this.entries
    }
  },

  contextRequests: {
    entries: function() {
      return this.entries
    }
  }
})
