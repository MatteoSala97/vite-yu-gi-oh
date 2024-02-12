<script>
import HeaderApp from './components/HeaderApp.vue';
import SearchApp from './components/SearchApp.vue';
import CardsList from './components/CardsList.vue';
import ApiLoader from './components/ApiLoader.vue';
import {store} from './store'
import axios from 'axios'

export default{
  components:{
    HeaderApp,
    SearchApp,
    CardsList,
    ApiLoader,
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    getCards(){
      store.loader = true
      // let myUrl = store.apiUrl 
      if(store.searchText !== ""){
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${store.searchText}`).then(res =>{
        store.cardsList = res.data.data
        console.log(store.searchText)
        store.loader = false
      })
       
      }else{
        axios.get(store.apiUrl).then(res =>{
          store.cardsList = res.data.data
          store.loader = false
  
        })
      }

    },
  },
  mounted() {
    this.getCards()

    axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then((res) => store.archetypes = res.data)
  }
}
</script>

<template>
  <header>
    <HeaderApp/>
  </header>
  <ApiLoader v-if="store.loader"/>
  <main v-else>
    <SearchApp
    @performSearch="getCards"/>
    <CardsList/>
  </main>
</template>

<style lang="scss"> 
@use '../src/scss/styles.scss'
</style>

