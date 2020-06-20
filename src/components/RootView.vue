<template>
  <div>Root view
<!--    <router-view></router-view>-->
    <ul id="example-1">
      <li v-for="person in people" :key="person.id">
        <router-link :to="{name: routeNames.user.dialog, params: {userId: person.id}}">
          {{ person.name }}, {{person.age}} - {{person.email}} | {{deferList}}
        </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
  import {routeNames} from 'src/router/routes';
  const faker = require('faker/locale/de');
  let people = []
  for (let i = 0; i < 100; i++) {
    people.push({
      id: i,
      name: faker.name.findName(),
      email: faker.internet.email(),
      age: faker.random.number(80)
    })
  }
  export default {
    // name: 'ComponentName',
    data() {
      return {
        people: people,
        routeNames: routeNames,
        deferList: false
      }
    },
    methods: {
      logSomething() {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
      }
    },
    beforeRouteEnter (to, from, next) {
      if (to.name === routeNames.user.dialog &&
        from.name === null){
        console.log('let\'s not render this.')
        next(vm => vm.deferList = true)
      }
      next()
    },
    beforeRouteUpdate (to, from, next) {
      if (to.name === routeNames.users &&
        from.name === routeNames.user.dialog &&
        this.deferList === true){
        console.log('now is the time to render')
        this.deferList = false
      }
      next()
    },
    beforeRouteLeave (to, from, next) {
      next()
    }
  }
</script>
