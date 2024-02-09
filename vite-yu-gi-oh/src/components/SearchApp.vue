<script>

    import {store} from '../../src/store'

    export default{
        name:"SearchApp",
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <nav class="container d-flex flex-column align-items-center justify-content-center mt-4">
        <div class="d-flex align-items-center justify-content-center mb-3">
            <select 
                name="filteredCards" 
                id="filteredCards" 
                class="select border rounded px-4 me-2">
                <option 
                value="" disabled selected hidden>Select Archetype </option>
                <option :value="archetype" v-for="archetype in store.archetypes" :key="archetype">{{ archetype }}</option>
            </select>
            <form class="d-flex">
                <input 
                name="search"
                class="form-control me-2" 
                type="search" 
                placeholder="Search your card..." 
                v-model="store.searchText" 
                aria-label="Search"
                >
                <button class="btn btn-outline-danger" type="submit">Search</button>
            </form>
        </div>
  </nav>
    <div id="search-result" class="container border rounded my-5 d-flex align-items-center justify-content-center">
        <p>Your research resulted in: &nbsp; {{ store.cardsList.length }} found cards.</p>
    </div>
</template>

<style lang="scss" scoped>

    .select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 0.5rem 1rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    cursor: pointer;
    
        &:focus{
            outline: none;
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }
    }

    form{
        width: 600px;
    }

    #search-result{
        width: 60%;
        height: 50px;
        margin: 0 auto;
        p{
            margin-top: 0;
            margin-bottom: 0;
        }
    }
</style>