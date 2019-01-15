var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
    message2: 'Quiz message',
    uid: '20',
    flag: false
  },
  methods: {
    clickBtn() {
      console.log("h1");
    },
    eventMethod: function() {
      alert('click event');
    }
  }
});
