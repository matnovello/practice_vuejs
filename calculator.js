var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Vue Calculator",
      number1: 0,
      number2: 0,
      number3: 0,
      sum: 0   ,
      showSecret: true, 
      cookies: ["oatmeal raisin", "oreo", "chocolate chip"],
      newCookie: "",

    };
  },
  methods: {
    add: function (){
      this.sum = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    }, 
    changeSecret: function(){
      console.log(this.showSecret);
     this.showSecret = !this.showSecret;

    },
    addCookie: function() {
      console.log(this.newCookie);
      this.cookies.push(this.newCookie);
    },
    removeCookie: function() {
      console.log(this.newCookie + " " +  "has been removed")
      this.cookies.pop(this.newCookie);
    },
  }
});