<template>
  <div>ERW
<!--    <router-view></router-view>-->
    <ul id="example-1">
      <li v-for="person in people" :key="person.id">
        <router-link :to="{name: routeNames.user.dialog, params: {userId: person.id}}">
          {{ person.name }}, {{person.age}} - {{person.email}}
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
        routeNames: routeNames
      }
    },
    methods: {
      logSomething() {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
      }
    }
  }
</script>
