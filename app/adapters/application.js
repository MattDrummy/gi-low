import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: `https://sheets.googleapis.com/v4/spreadsheets/1DedVf2UTdysxyEKoQpu1nWNttx_oK7iwKUpzWv2MrUs`,
  shouldReloadRecord: function() {
    return true;
  },
  shouldReloadAll: function() {
    return true;
  },
  shouldBackgroundReloadRecord: function() {
    return true;
  },
  shouldBackgroundReloadAll: function() {
    return true;
  },
  
});
