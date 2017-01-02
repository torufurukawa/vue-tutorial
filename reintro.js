var object = {
  message: 'Hello world!'
}


var Example = Vue.extend({
  template: '<div>{{ message }}</div>',
  data: function () {
    return {
      message: 'Hello Vue.js!'
    };
  }
});

Vue.component('example', Example);

var example = new Vue({
  el: '#example',
  data: object,
  computed: {
    b: function () {
      return this.message + "!";
    }
  }
});
