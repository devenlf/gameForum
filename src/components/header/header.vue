<template>
   <div id="headerBox" class="v-header">
           <img src="@/assets/image/bg.png"/>
    </div> 
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#headerBox {
  display: '-webkit-flex'; /* Safari */
  display: flex;
  justify-content:center ;
  img {
    height: 100%;
    display: block;
  }
}
</style>


