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

      axios.get(store.apiUrl).then(res =>{

        store.cardsList = res.data.data

        store.loader = false

        res.data.data.forEach(element =>{
          if(element.archetype !== undefined){
            if(!store.archetypes.includes(element.archetype)){
              store.archetypes.push(element.archetype)
            }
          }
        });
      })
    },
    
  },
  mounted() {
    this.getCards()
  }
}
</script>

<template>
  <header>
    <HeaderApp/>
  </header>
  <ApiLoader v-if="store.loader"/>
  <main v-else>
    <SearchApp/>
    <CardsList/>
  </main>
</template>

<style lang="scss" >
@use '../src/scss/styles.scss'
</style>
