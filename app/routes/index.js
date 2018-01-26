import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {
      comics: this.get('store').findAll('comic'),
    }
  }
});
