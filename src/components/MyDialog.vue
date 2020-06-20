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
          id: {{ $route.params.userId }}
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
        fullWidth: true,
        fullHeight: false,
        full: false,
        id: this.$route.params.id
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
      next()
    },
    beforeRouteUpdate (to, from, next) {
      next()
    },
    beforeRouteLeave (to, from, next) {
      next()
    }
  }
</script>
