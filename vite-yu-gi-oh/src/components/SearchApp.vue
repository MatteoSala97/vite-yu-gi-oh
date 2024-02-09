<script>
    export default{
        name:"SearchApp",
        data(){
            return{
                
            }
        }
    }
</script>

<template>
    <nav class="container d-flex text-center justify-content-center gap-3  mt-4">
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
                <input class="form-control me-2" type="search" placeholder="Search your card..." aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<style>

</style>