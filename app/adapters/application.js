import DS from 'ember-data';
import $ from 'jquery'
import { Promise } from 'rsvp'

export default DS.RESTAdapter.extend({
  host: `https://sheets.googleapis.com/v4/spreadsheets/1DedVf2UTdysxyEKoQpu1nWNttx_oK7iwKUpzWv2MrUs/values/Sheet1!A1:C2?key=AIzaSyAqR1RPBQfCdYsJC6ojsZ2J25smy4iFO4I`,
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
  findAll(store, type, sinceToken){
    let query = { since: sinceToken };
    let host = this.get('host')

    return new Promise(function(resolve, reject){
      $.getJSON(host, query).then(function(data){
        let mapping = {
          "comics": data.values.map((e,i)=>{
            return {
              id: i,
              url: e[0],
              comment: e[1],
              title: e[2],
            }
          })
        }
        console.log(mapping);
        resolve(mapping)
      }, function(err){
        reject(err)
      })
    })
  },
});
