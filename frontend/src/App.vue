<template>
  <div id="app">
    <button type="button" @click='alertDisplay()' class="btn btn-danger">?</button>
    <Dashboard />
  </div>
</template>

<script>

import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard
  },
data() {
      return {
        text: ''
      }
    },
    methods: {
      alertDisplay() {
        this.$swal('INSTRUCTIONS', 'To CREATE a flight status, fill in the necessary components and click create. To UPDATE a flight status, fill in the necessary components and click the update button. To DELETE a flight status, click the X on the dashboard that corresponds to the flight you want to delete.', 'OK');
      }
    }
}
</script>

<style>

</style>