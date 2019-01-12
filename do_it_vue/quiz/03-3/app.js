// 전역 컴포넌트인 child-component에 props 속성을 전달하여
// 하위 컴포넌트에서 상위 컴포넌트의 메시지를 출력하시오.

Vue.component('sibling-component', {
  props: ['propsdata'],
  template: '<p>{{propsdata}}</p>'
});

Vue.component('child-component', {
  props: ['propsdata'],
  template: '<p>{{propsdata}}</p>'
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue! passed from Parent Component',
    anotherMessage: 'another Message입니다.'
  }
});
