<template>
    <section class="">
        <h1>Home</h1>
        <h1>פשוווווטטטטט</h1>
        <!-- <fancy-text txt="Fancy text" /> -->
        <custom-button>
            <h1>Click me!</h1>
        </custom-button>
    </section>
</template>

<script>
import fancyText from '../components/fancy-text.vue';
import customButton from '../components/custom-button.vue';
export default {
    name: 'home',
    components: {
        fancyText,
        customButton
    }
}
</script>
