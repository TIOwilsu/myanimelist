<template>
    <b-card
        class="border-0 rounded-0"
        tag="article"
        :no-body="true"
    >
        <div class="card-bg mb-2" :style="`background-image: url(${imageUrl})`"></div>
        <b-card-body class="p-0">
            <b-card-title class="text-left mb-0">{{ title }}</b-card-title>
            <div class="d-flex align-items-center justify-content-between">
                <span class="card-text">{{ totalEpisodes }}</span>
                <span class="card-text d-flex align-items-center">
                    <b-icon icon="star-fill" variant="warning" width="11" class="mr-1" />
                    {{ score }}
                </span>
            </div>
        </b-card-body>
        <a class="card-link position-absolute" :href="url" target="_blank"></a>
        <div class="card-status position-absolute">
            <div :class="`position-absolute bg bg-${color}`"></div>
            <b-icon :icon="icon" class="position-absolute" variant="light" width="24"/>
        </div>
  </b-card>
</template>
<script>

export default {
    name: 'Card',
    props: {
        anime: {
            type: Object,
            required: true
        },
    },
    computed: {
        imageUrl(){
            return this.anime.image_url
        },
        title(){
            return this.anime.title
        },
        totalEpisodes(){
            return `${this.anime.total_episodes} Episode(s)`
        },
        url(){
            return this.anime.url
        },
        score(){
            return this.anime.score
        },
        color(){
            const { color } = this.validateStatus(this.anime.watching_status)
            return color
        },
        icon(){
            const { icon } = this.validateStatus(this.anime.watching_status)
            return icon
        }
    },
    methods: {
        validateStatus(status){
            if(status === 1){
                return { color: 'primary', icon: 'stopwatch' }
            }
            if(status === 2){
                return { color: 'success', icon: 'check' }
            }
            if(status === 3){
                return { color: 'warning', icon: 'exclamation'}
            }
            if(status === 4){
                return { color: 'danger', icon: 'x' }
            }
            if(status === 6){
                return { color: 'secondary', icon: 'stopwatch' }
            }
        }
    },
}
</script>
<style lang="scss">
    .card{
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        padding: 12px;
        overflow: hidden;
        &:hover{
            box-shadow: 0 1px 3px rgba(0,0,0,.55)
        }
        & .card-bg{
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            padding-top: calc(350/225 * 100%);
        }
        & .card-title{
            color: #000;
            font-size: 13px;
            font-weight: bold;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        & .card-link{
            bottom: 0;
            top:0;
            left: 0;
            right: 0;
        }
        & .card-text{
            color: #888888;
            font-size: 11px;
        }
        & .card-status{
            pointer-events: none;
            top: 0;
            right: 0;
            height: 50px;
            width: 50px;
            &>.bg{
                transform: rotate(45deg) translateY(-70%);
                height: 100%;
                width: 100%;
            }
            &>svg{
                right: 0;
                top: 2px;
            }
        }
    }
</style>