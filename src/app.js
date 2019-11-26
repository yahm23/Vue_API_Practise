import Vue from 'vue';

document.addEventListener('DOMContentLoaded',()=> {
  new Vue({
    el:"#app",

    data:{
      allData:[],
      exchangeRates:[],
      euroAmount:0,
      conversionCodeString:"",
      conversionCodeString2:"",
      rateValue:"",
      otherCurrencyAmount:0,
    },

    methods:{
      fetchRates: function(){
        fetch('https://api.exchangeratesapi.io/latest')
        .then(data => data.json())
        .then(data => this.allData = data)
        .then(data => this.exchangeRates = data.rates)
      },

      findCode: function(){
          const rateArray = this.exchangeRates
          this.rateValue = rateArray[this.conversionCodeString]
          // const rateArray = this.exchangeRates.filter((index,key,value)=>{
          // return key == this.conversionCodeString })
          // this.rateValue = rateArray[0]
      },

      // searchCountry: function(){
      //   const countryArray = this.countries.filter((country)=>{
      //   return country.name == this.countryNameToSearch})
      //   this.foundCountry = countryArray[0] }


    },

    computed:{

      convert: function(){
        return this.rateValue* this.euroAmount
      },

      convertTwo: function(){
        return this.otherCurrencyAmount/this.rateValue
      }

    },
    mounted(){
      this.fetchRates()
    }

  })
})
