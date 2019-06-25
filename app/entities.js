import Backbone from 'backbone';

export const Entry = Backbone.Model.extend({
  defaults: {
    title: '',
    content: '',
    firstLetter: '',
    date: ''
  }
});

export const Entries = Backbone.Collection.extend({
  model: Entry
});
