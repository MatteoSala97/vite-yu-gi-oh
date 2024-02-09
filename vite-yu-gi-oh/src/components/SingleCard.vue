<script>

    export default{
    name: 'SingleCard',
    }
    
</script>

<template>
        <div class="col">
            <figure class="d-flex flex-column align-items-center gap-2 mb-5">
                <img src="https://m.media-amazon.com/images/I/51MrLzpkmAL._AC_UF1000,1000_QL80_.jpg" alt="Card">
                <span>Pot of greed</span>
            </figure>
        </div>
</template>

<style scoped>
    .col{

        figure{
            
            img{
                width: 300px;
                -webkit-box-shadow: 5px 10px 13px -7px #fff, 6px 2px 0px 2px rgba(0,0,0,0); 
                box-shadow: 5px 10px 13px -7px #fff, 6px 2px 0px 2px rgba(0,0,0,0);
                &:hover{
                    transform: scale(1.02);
                }
            }

            span{
                font-weight: bold;
                font-size: 20px;
            }
        }
    }
</style>