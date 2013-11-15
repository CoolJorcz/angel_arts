// for more details see: http://emberjs.com/guides/models/defining-models/

AngelArts.Story = DS.Model.extend({
  name: DS.attr('string'),
  body: DS.attr('string')
});
