<template>
    <h2>Types</h2>

    <ul>
        <li v-for="t in view.type">
            <button @click="type = t.data">{{ t.data }}</button>
        </li>
    </ul>

    <pre>{{getData}}</pre>

    <components :cmps="getData" />


</template>
<script>
import components from '../components/components.vue'

export default {
    name: 'Headers',
    props: { cmps: Object },
    components: { components },
    data() {
        return {
            view: {},
            type: null,
            data: {}
        };
    },
    created() {
        this.view = {...this.cmps}
        this.type = this.cmps.type[0].data
        this.setData()
    },
    methods: {
        setData() {
            const cmps = { ...this.view }
           
            cmps.type = cmps.type.map((x, i) => ({
                id: Date.now() / 15500 + i,
                data: this.type + ` ${i}`
            }))
            this.data = { ...cmps }
            console.log('cmps:', this.data)
        }
    },
    computed:{
        getData(){
            return this.data
        }
    },
    watch: {
        type() {
            this.setData()
        }
    }
};
</script>
<style>

</style>