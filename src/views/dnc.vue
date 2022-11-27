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
                        headline: "Foo"
                    },
                    {
                        _uid: "gJZoSLkfZV",
                        component: "bar",
                        title: "Bar"
                    },
                    {
                        _uid: "X1JAfdsZxy",
                        component: "foo",
                        headline: "Another headline"
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