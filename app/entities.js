import Backbone from 'backbone';

export const Entry = Backbone.Model.extend({
  defaults: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  }
});

export const Entries = Backbone.Collection.extend({
  model: Entry
});
