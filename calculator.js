var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Vue Calculator",
      number1: 0,
      number2: 0,
      number3: 0,
      sum: 0   ,
      showSecret: true;

    };
  },
  methods: {
    add: function (){
      this.sum = parseInt(this.number1) + parseInt(this.number2);
    }
    showSecret(){
      this.showSecret = !this.showSecret;
    }
  }
});