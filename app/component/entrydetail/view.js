import { View } from 'backbone.marionette';

export default View.extend({
  template: require('./template.html'),

  triggers: {
    'click #save-entry': 'save:model'
  }
});
