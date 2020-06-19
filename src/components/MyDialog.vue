<template>
  <div>
    <q-dialog
      v-model="fullWidth"
      full-width
      @show="atShow"
      @hide="atHide"
    >
      <q-card>
        <q-card-section>
          <div class="text-h6">Full Width</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Click/Tap on the backdrop.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog
      v-model="fullHeight"
      full-height
      @show="atShow"
      @hide="atHide"
    >
      <q-card class="column full-height" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Full Height</div>
        </q-card-section>

        <q-card-section class="col q-pt-none">
          Click/Tap on the backdrop.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>


    <q-dialog
      v-model="full"
      full-height
      full-width
      @show="atShow"
      @hide="atHide"
    >
      <q-card class="column full-height" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Full Height</div>
        </q-card-section>

        <q-card-section class="col q-pt-none">
          Click/Tap on the backdrop.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
  import {routeNames} from "src/router/routes";
  export default {
    // name: 'ComponentName',
    data() {
      return {
        fullWidth: false,
        fullHeight: false,
        full: true
      }
    },
    methods: {
      atShow() {
        console.log("showing")
      },
      atHide(arg) {
        console.log("hiding" + arg )
        console.log(arg)
        this.$router.replace({name: routeNames.users});
      }
    },
    beforeRouteEnter (to, from, next) {
      console.log("beforeRouteEnter")
      console.log("to:" + to)
      console.log(to)
      console.log("from:" + from)
      console.log(from)
      // console.log("next:" + next)
      next()
      // called before the route that renders this component is confirmed.
      // does NOT have access to `this` component instance,
      // because it has not been created yet when this guard is called!
    },
    beforeRouteUpdate (to, from, next) {
      console.log("beforeRouteUpdate")
      console.log("to:" + to)
      console.log(to)
      console.log("from:" + from)
      console.log(from)
      // console.log("next:" + next)
      next()
      // called when the route that renders this component has changed,
      // but this component is reused in the new route.
      // For example, for a route with dynamic params `/foo/:id`, when we
      // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
      // will be reused, and this hook will be called when that happens.
      // has access to `this` component instance.
    },
    beforeRouteLeave (to, from, next) {
      console.log("beforeRouteLeave")
      console.log("to:" + to)
      console.log(to)
      console.log("from:" + from)
      console.log(from)
      // console.log("next:" + next)
      next()
      // called when the route that renders this component is about to
      // be navigated away from.
      // has access to `this` component instance.
    }
  }
</script>
