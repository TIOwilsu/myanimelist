<template>
    <b-card
        class="border-0 rounded-0"
        tag="article"
        :no-body="true"
    >
        <div class="card-bg mb-2" :style="`background-image: url(${imageUrl})`"></div>
        <b-card-body class="p-0">
            <b-card-title class="text-left mb-0">{{ title}}</b-card-title>
            <div class="d-flex align-items-center justify-content-between">
                <span class="card-text">{{ totalEpisodes }}</span>
                <span class="card-text d-flex align-items-center">
                    <b-icon icon="star-fill" variant="warning" width="11" class="mr-1" />
                    {{ score }}
                </span>
            </div>
        </b-card-body>
        <a class="card-link position-absolute" :href="url"></a>
  </b-card>
</template>
<script>
export default {
    name: 'Card',
    props: {
        anime: {},
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
        }
    }
}
</script>
<style lang="scss">
    .card{
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        padding: 12px;
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
    }
</style>