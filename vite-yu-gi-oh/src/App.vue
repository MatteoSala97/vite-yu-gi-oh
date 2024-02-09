<script>
import HeaderApp from './components/HeaderApp.vue';
import SearchApp from './components/SearchApp.vue';
import CardsList from './components/CardsList.vue';

import {store} from './store'
import axios from 'axios'

export default{
  components:{
    HeaderApp,
    SearchApp,
    CardsList,
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    getCards(){

      axios.get(store.apiUrl).then(res =>{
        console.log(res.data)

        store.cardsList = res.data.data
      })
    },
    
  },
  mounted() {
    this.getCards()
  }
}
</script>

<template>
  <HeaderApp/>
  <main>
    <SearchApp/>
    <CardsList/>
  </main>
</template>

<style>

</style>
