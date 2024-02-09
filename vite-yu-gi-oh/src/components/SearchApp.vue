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
    <nav class="container d-flex text-center justify-content-center gap-3 mt-4">
        <div class="dropdown">
            <button class="btn border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Alien
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"></a></li>
            </ul>
        </div>
        <div class="w-50">
            <form class="d-flex" role="search">
                <input 
                name="search"
                class="form-control me-2" 
                type="search" 
                placeholder="Search your card..." 
                v-model="store.searchText" 
                aria-label="Search">
                <button class="btn btn-outline-success" type="submit">
                    Search
                </button>
            </form>
        </div>
    </nav>
    <div id="search-result" class="container d-flex border rounded my-5 align-items-center justify-content-center">
        <p class="">
            Your research resulted in: {{  }} found cards.
        </p>
    </div>
</template>

<style scoped>
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