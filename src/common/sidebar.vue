<template>
<el-col class="sidebar">
    <el-row class="logoImg">
        <img  src="./images/gamelogo.png"/>
    </el-row>
    <el-row class="listmuen">
        <el-menu router text-color="#ccc" >
            <template v-for="(item,index) in $router.options.routes[0].children">
            <el-menu-item :index="item.path" :key="index">
                <i :class="item.className"></i>
                <span>{{item.name}}</span>
            </el-menu-item>
            </template>
        </el-menu>
    </el-row>
</el-col>
</template>
<style lang="scss">
.sidebar {
  height: 100%;
  width: 150px;
  position:fixed;
  background: #1e1e1e;
}
.el-menu {
  background-color: #1e1e1e;
}
.logoImg {
  width: 100%;
  height: 100px;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      msg: "dada side"
    };
  },
  created:function(){
    
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>


