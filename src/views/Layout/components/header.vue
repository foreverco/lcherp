<template>
  <div class="header-box">
    <div class="coll-box" @click="changeCollspan">
      <i class="el-icon-s-operation" />
      <span>昆山禄昌恒电子有限公司</span>
    </div>
    <div>
      <span>欢迎您！</span>
      <span>{{ username }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      username: state => state.app.username
    })
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    changeCollspan() {
      this.$store.commit("app/SET_COLLAPSE");
    }
  }
};
</script>

<style scoped lang="scss">
.header-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  .coll-box {
    span {
      font-size: 22px;
      font-weight: bold;
      letter-spacing: 2px;
      margin-left: 15px;
    }
    i {
      font-size: 20px;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
