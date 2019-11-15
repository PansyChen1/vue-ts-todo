<template>
  <div class="home"></div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Vue, Component } from "vue-property-decorator";
import Header from "@/components/Header.vue";

// import Create from "@/components/Create.vue";

@Component({
  components: {
    Header
  }
})
export default class Home extends Vue {}
</script>
