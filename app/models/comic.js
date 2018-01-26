import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr(),
  comment: DS.attr(),
  title: DS.attr(),
});
