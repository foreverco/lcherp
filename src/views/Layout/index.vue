<template>
  <el-container id="layout-container">
    <el-aside id="layout-aside" :width="collapse === true ? '60px' : '250px'"
      ><LayoutAside
    /></el-aside>
    <el-container>
      <el-header id="layout-header" height="75px"><LayoutHeader /></el-header>
      <el-main id="layout-main"><LayoutMain /></el-main>
    </el-container>
  </el-container>
</template>

<script>
// 组件
import LayoutAside from "./components/aside";
import LayoutHeader from "./components/header";
import LayoutMain from "./components/main";
import { mapState } from "vuex";
export default {
  name: "Layout",
  components: { LayoutAside, LayoutHeader, LayoutMain },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      collapse: state => state.app.collapse
    })
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
#layout-container {
  height: 100vh;
  display: flex;
}
#layout-aside {
  background-color: #344a5f;
  @include webkit(transition, all 0.3s ease 0s);
}
#layout-header {
  position: relative;
  z-index: 10;
  @include webkit(box-shadow, 0 0 30px 0 rgba(0, 0, 0, 0.2));
}
#layout-main {
  border: 20px solid #f7f7f7;
  background-color: #fff;
  padding: 30px;
  min-height: calc(100vh - 80px);
}
</style>
