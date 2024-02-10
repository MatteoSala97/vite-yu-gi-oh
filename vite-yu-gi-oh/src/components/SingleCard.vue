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
            text-align: center;
            
            img{
                width: 300px;
                height: 450px;
                
                &:hover{
                    transform: scale(1.02);
                    -webkit-box-shadow: 0px 0px 20px 5px #c0c0c0; 
                    box-shadow: 0px 0px 20px 5px #c0c0c0;
                }
            }

            h4{
                font-size: 20px;
                margin: 0;
            }
        }
    }
</style>