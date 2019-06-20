// eslint-disable-next-line no-unused-vars
import Mn from 'backbone.marionette';
import './setup';
import {  Router } from 'marionette.routing';
import Radio from 'backbone.radio';
import ApplicationRoute from './component/application/route';
import EntriesRoute from './component/entries/route';
import EntryDetailRoute from './component/entrydetail/route';
import EntryNoSelectionView from './component/no-selection/view';
import app from './component/App';

const router = new Router({log: true, logError: true}, app.getRegion());

router.map((route) => {
  route('application', {path: '/', routeClass: ApplicationRoute}, function() {
    route('entries', {routeClass: EntriesRoute, abstract: true}, function() {
      route('entries.default', {path: '', viewClass: EntryNoSelectionView,
        viewOptions: {message: 'Please Select a Entry.'}})
      route('entrydetail', {path: ':entryid', routeClass: EntryDetailRoute})
    })
  })
});

Radio.channel('router').on('before:transition', function(transition) {
  if (transition.path === '/') {
    transition.redirectTo('entries.default')
  }
});

router.listen();
