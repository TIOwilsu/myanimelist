<template>
    <b-container>
        <Tabs 
            :headers="headers" 
            :items="animes" 
            :loading="loading" 
            @onTab="onTab" />
    </b-container>
</template>
<script>
import Tabs from '@/components/tabs/Tabs'
import { getAllAnimeList } from '@/services/user'

export default {
    components: {
        Tabs
    },
    data:() => ({
        animes: [],
        status: 'all',
        loading: false
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
                const { status, loadItems } = this
                const { anime } = await getAllAnimeList('Shawdon255', status)
                loadItems(anime)
            } catch(err){
                console.log(err)
            } finally{
                this.loading = false
            }
        },
        onTab(status){
            this.animes = []
            this.status = status
            this.fetch()
        },
        loadItems(items){
            items.map((item,index) => {
                if(index >= 12) return false
                this.animes.push(item)
            })
        }
    }
}

</script>