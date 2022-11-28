<template>
  <div class="wide-page">
    <div class="columns">

      <!-- <components :cmps="cmps" /> -->
      <cmps-dynamic :cmps="cmps" />
      <site :site="site" />


    </div>
  </div>



</template>

<script>
import { Container, Draggable } from "vue3-smooth-dnd";
import site from '../components/site.vue'
import cmpsDynamic from '../components/cmps-dynamic.vue'
// import components from '../components/components.vue'

export default {
  name: "app",
  components: { Container, Draggable, site, cmpsDynamic },
  data() {
    return {
      cmps: {
        type: [{
          "id": "item-1",
          "data": "HEADER"
        },
        {
          "id": "item-2",
          "data": "HERO"
        },
        {
          "id": "item-3",
          "data": "FORUM"
        },
        {
          "id": "item-4",
          "data": "TEXT"
        },
        {
          "id": "item-5",
          "data": "FOOTER"
        }],
        options: {
          "drop": false,
          "animate": true
        }
      },
      site: {
        layout: [
          {
            "id": "item-6",
            "data": "Draggable 2 - 1"
          },
          {
            "id": "item-7",
            "data": "Draggable 2 - 2"
          },
          {
            "id": "item-8",
            "data": "Draggable 2 - 3"
          },
          {
            "id": "item-9",
            "data": "Draggable 2 - 4"
          },
          {
            "id": "item-10",
            "data": "Draggable 2 - 5"
          }
        ],
        options: {
          "drop": true,
          "animate": true
        }
      }
    }
  },

}
</script>


<style scoped>
.columns>* {
  margin-left: 50px;
}

.columns {
  display: flex;
  justify-content: stretch;
}

.column .smooth-dnd-container.vertical {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>