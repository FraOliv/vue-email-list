const app = new Vue({
  el: "#app",
  data: {
    MailList: [],
    GridNumbers: [],
  },
   methods: {
        random(){
            this.GridNumbers = [];
            for (let i = 0; i < 36; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/int').then(response => {
                    //console.log(response);
                    //console.log(response.data.response);
                    this.GridNumbers.push(response.data.response);
                })                
            }
            console.log(this.GridNumbers);
        }
    },
  mounted: function() { 
    for (let i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(response => {
        this.MailList.push(response.data.response)
     });
    }
    
  }
});