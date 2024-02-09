<script>

  import SingleCard from './SingleCard.vue'
  import {store} from '../../src/store'

    export default {
    name: 'CardsList',
    components:{
      SingleCard
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<template> 
  <div class="container mt-4">
    <div class="row">
      <SingleCard 
      v-for="(card, index) in store.cardsList" 
      :key="index"/> 
    </div>
</div>
  
</template>

<style scoped>

</style>