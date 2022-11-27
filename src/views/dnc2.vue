<template>
<div>
    <template v-for="block in content.body" :key="block._uid">
        <component :is="block.component" :block="block"></component>
    </template>
</div>

</template>
<script>
import foo from '../dncs/foo.vue';
import bar from '../dncs/bar.vue';


export default {
    data() {
        return {
            content: {
                body: [
                    {
                        _uid: "BUY6Drn9e1",
                        component: "foo",
                        headline: "Puki"
                    },
                    {
                        _uid: "gJZoSLkfZV",
                        component: "bar",
                        title: "Bar is so cute"
                    },
                    {
                        _uid: "X1JAfdsZxy",
                        component: "foo",
                        headline: "Puki ja is the king"
                    },
                    {
                        _uid: "S54dS2salD",
                        component: "bar",
                        title: "Puki ja wallakuluminalla"
                    }
                ]
            }
        }
    },
    components: {
    foo,
    bar
  }
}
</script>