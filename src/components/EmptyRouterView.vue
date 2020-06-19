<template>
  <div>ERW
    <router-view></router-view>
    <router-view name="dialog" @show="logSomething"></router-view>
    <router-link to="/erw/dialog">Go to Bar</router-link>
    <ul id="example-1">

      <li v-for="person in people" :key="person.id">
        <router-link :to="{name:'users.dialog', params: {userId: 1}}">
        {{ person.name }}, {{person.age}} - {{person.email}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
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
        people: people
      }
    },
    methods: {
      logSomething() {
        console.log("parent triggered")
      }
    }
  }
</script>
