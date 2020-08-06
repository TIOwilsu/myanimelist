<template>
    <div class="container">
        <div class="row">
            <b-col v-for="(anime, index) in animes" lg="2" md="3" sm="4" :key="index">
                <Card :anime="anime" />
            </b-col>
        </div>
    </div>
</template>
<script>
import Card from '@/components/cards/Card'
import { getAllAnimeList } from '@/services/user'
export default {
    components: {
        Card
    },
    data:() => ({
        animes: []
    }),
    mounted(){
        this.fetch()
    },
    methods: {
        async fetch(){
            const { anime } = await getAllAnimeList('TIOwilsu')
            this.animes = anime
        }
    }
}

</script>