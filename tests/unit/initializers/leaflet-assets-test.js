import Ember from 'ember';
import { initialize } from '../../../initializers/leaflet-assets';
import { module, test } from 'qunit';
/* global L */

var registry, application;

module('Unit | Initializer | leaflet assets', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      registry = application.registry;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(registry, application);

  assert.ok(typeof L.Icon.Default.imagePath !== 'undefined', '`L.Icon.Default.imagePath` is not set');
});
