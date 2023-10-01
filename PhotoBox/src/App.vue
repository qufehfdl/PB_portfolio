<template>
  <div class="container">
    <div class="row">
      <div class="col-12" id="top">
        <Top></Top>
      </div>
      <div class="col-12" id="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Top from "./views/Top.vue";
export default {
  components: {
    Top
  },
  data() {
    return {

    };
  },
  methods: {},
  computed: {
    session() {
      return this.$store.getters.getSession;
    }
  },
  mounted() { },
  created() { }
};
</script>
<style>
.container {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  height: 100vh;
  position: relative;
}

#main {
  position: absolute;
  top: 20%;
}
</style>






