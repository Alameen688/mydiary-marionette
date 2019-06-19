import { Application } from 'backbone.marionette';
import {  Router } from 'marionette.routing';
import ItemView from './ItemView';

const app = new Application({
  region: '#app',

  onStart() {
    this.showView(new ItemView());
  }
});

const router = new Router({log: true, logError: true}, app.getRegion());
