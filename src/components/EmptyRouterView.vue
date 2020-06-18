<template>
  <div >ERW
    <router-view></router-view>
    <router-view name="dialog" @show="logSomething"></router-view>
    <router-link to="/erw/dialog">Go to Bar</router-link>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  methods: {
    logSomething(){
      console.log("parent triggered")
    }
  }
}
</script>
