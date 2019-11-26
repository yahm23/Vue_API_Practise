import Vue from 'vue';

document.addEventListener('DOMContentLoaded',()=> {
  new Vue({
    el:"#app",

    data:{
      allData:[],
      exchangeRates:[],
      euroAmount:0,
      conversionCode:""
    },

    methods:{
      fetchRates: function(){
        fetch('https://api.exchangeratesapi.io/latest')
        .then(data => data.json())
        .then(data => this.allData = data)
        .then(data => this.exchangeRates = data.rates)
      },


    },

    computed:{
      convert: function(){
        const rate =  this.allData.filter((rate,key,index)=> {
          return rate.key == this.conversionCode
        })

      }

    },
    mounted(){
      this.fetchRates()
    }

  })
})
