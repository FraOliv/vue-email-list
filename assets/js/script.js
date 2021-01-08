const app = new Vue({
  el: "#app",
  data: {
    ListaMail: []
  },
  mounted: function() { 
    for (let i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(risposta => {
        this.ListaMail.push(risposta.data.response)
     });
    }
    
  }
});