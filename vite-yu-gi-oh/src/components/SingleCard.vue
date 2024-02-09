<script>

    export default{
    name: 'SingleCard',
    props:[
            'element',
        ]
    }
    
</script>

<template>
        <div class="col">
            <figure class="d-flex flex-column align-items-center gap-2 mb-5">
                <img :src="element.card_images[0].image_url_small" :alt="element.name">
                <h4>{{element.name}}</h4>
                <span>{{element.archetype}}</span>
            </figure>
        </div>
</template>

<style lang="scss" scoped>
    .col{

        figure{
            
            img{
                -webkit-box-shadow: 5px 10px 13px -7px #fff, 6px 2px 0px 2px rgba(0,0,0,0); 
                box-shadow: 5px 10px 13px -7px #fff, 6px 2px 0px 2px rgba(0,0,0,0);
                &:hover{
                    transform: scale(1.02);
                }
            }

            h4{
                font-weight: bold;
                font-size: 20px;
                margin: 0;
            }
        }
    }
</style>