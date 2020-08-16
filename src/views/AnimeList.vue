<template>
    <b-container>
        <Tabs 
        :headers="headers" 
        :items="uploadedAnime" 
        :loading="loading" 
        @onTab="onTab" /> 
        <b-btn v-show="IsButtonDisplayed" @click="uploadAnimes">Mais Séries</b-btn>
    </b-container>
</template>
<script>
import Tabs from '@/components/tabs/Tabs'
import { getAllAnimeList } from '@/services/user'

export default {
    name: 'anime-list',
    components: {
        Tabs
    },
    data:() => ({
        anime: [],
        uploadedAnime: [],
        status: 'all',
        loading: false,
        limit: 0,
        IsButtonDisplayed: true
    }),
    computed:{
        headers() {
            return [
                'All',
                'Watching',
                'Completed',
                'On Hold',
                'Dropped',
                'Plan to watch'
            ]
        }
    },
    mounted(){
        this.fetch()
    },
    methods: {
        async fetch(){
            try{
                this.loading = true
                const { status, uploadAnimes } = this
                const { anime } = await getAllAnimeList('TIOwilsu', status)
                this.anime = anime
                uploadAnimes()
            } catch(err){
                console.log(err)
            } finally{
                this.loading = false
            }
        },
        onTab(status){
            this.anime = []
            this.uploadedViewed = []
            this.limit = 0
            this.IsButtonDisplayed = true
            this.status = status
            this.fetch()
        },
        uploadAnimes(){
            this.limit+= 12
            this.uploadedAnime = this.anime.filter((anime,index) => index < this.limit)
            if(this.uploadedAnime.length === this.anime.length) this.IsButtonDisplayed = false
        }
    }
}

</script>