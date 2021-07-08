<template>
  <div>
    <h1 class="logo">
      <img
        src="../../../assets/images/logo.png"
        alt=""
        :class="{ 'mini-logo': collapse }"
      />
    </h1>
    <el-menu
      :collapse="collapse"
      :default-active="defalutActive"
      class="el-menu-vertical-demo"
      background-color="#344a5f"
      text-color="#fff"
      active-text-color="#fff"
      router
      unique-opened
    >
      <template v-for="(item, index) in router">
        <el-submenu
          v-if="!item.hidden && item.type === 'list'"
          :key="item.id"
          :index="index + ''"
        >
          <template slot="title">
            <i
              style="color: #fff"
              :class="item.meta && item.meta.iconClass"
            ></i>
            <span>{{ item.meta ? item.meta.title : "" }}</span>
          </template>
          <template v-if="item.children && item.children.length > 0">
            <template v-for="sub in item.children">
              <el-menu-item v-if="!sub.hidden" :key="sub.id" :index="sub.path">
                <i
                  style="color: #fff"
                  :class="sub.meta && sub.meta.iconClass"
                ></i>
                {{ sub.meta ? sub.meta.title : "" }}
              </el-menu-item>
            </template>
          </template>
        </el-submenu>
        <el-menu-item
          v-if="!item.hidden && item.type !== 'list'"
          :key="item.id"
          :index="item.path"
        >
          <i style="color: #fff" :class="item.meta && item.meta.iconClass"></i>
          {{ item.meta ? item.meta.title : "" }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "LayoutAside",
  components: {},
  props: {},
  data() {
    return {
      router: null
    };
  },
  created() {
    this.router = this.$router.options.routes[2].children;
    console.log(this.$router.options);
  },
  computed: {
    defalutActive() {
      const route = this.$route;
      return route.path;
    },
    ...mapState({
      collapse: state => state.app.collapse
    })
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.logo {
  margin-top: 20px;
  img {
    margin: auto;
    height: 113px;
    @include webkit(transition, all 0.3s ease 0s);
  }
  .mini-logo {
    height: 50px;
  }
}
</style>
