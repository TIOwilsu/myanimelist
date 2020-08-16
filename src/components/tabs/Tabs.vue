<template>
    <b-tabs lazy>
        <b-tab v-for="(header,index) in headers" :title="header" :key="index" @click="tab">
            <b-row>
                <template v-if="hasItems && !loading">
                    <b-col v-for="(item, index) in items" lg="2" md="3" sm="4" class="mb-4" :key="index">
                        <Card :anime="item" />
                    </b-col>
                </template>
                <b-col v-if="!hasItems && !loading">
                    <p>Nenhum item foi encontrado</p>
                </b-col>
                <b-col v-if="loading">
                    <b-spinner variant="primary" class="ml-auto"></b-spinner>
                </b-col>
            </b-row>
        </b-tab>
    </b-tabs>
</template>
<script>
import Card from '@/components/cards/Card'

export default {
    name: 'tabs',
    components: {
        Card  
    },
    props:{
        headers: {
            type: Array,
            required: true
        },
        items:{
            type: Array,
            required: true
        },
        loading: {
            type: Boolean,
            required: true
        }
    },
    computed:{
        hasItems(){
            if(this.items.length > 0) 
                return true
            else 
                return false
        }
    },
    methods:{
        tab(event){
            const text = event.target.childNodes[0].data
            const filter = text.split(' ').join('').toLowerCase()
            this.$emit('onTab', filter)
        }
    }
}
</script>
<style lang="scss">
    .tabs{
        & .nav-tabs{
            background-color: $gray-600;
            border-bottom: none;
            padding: 4px 4px 0;
            margin-bottom: 1.5rem;
            height: 36px;
        }
        & .nav-link{
            background-color: $gray-800;
            border: none;
            border-radius: 0;
            color: $white;
            font-size: 14px;
            font-weight: bold;
            margin-right: 4px;
            padding: 0 20px;
            line-height: 34px;
            height: 32px;
            &:focus{
                outline: none;
            }
            &:hover{
                background-color: $gray-900;
            }
            &.active{
                background-color: $white;
                color: $gray-800;
            }
        }
    }
</style>