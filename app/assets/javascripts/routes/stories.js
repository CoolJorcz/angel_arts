AngelArts.StoriesRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('story');
  }
});