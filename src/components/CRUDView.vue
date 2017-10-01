<template>
  <div>
    <h1>CRUD View</h1>
    <p>{{applications}} {{currentApplication || 'None'}}</p>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'crudView',
  computed: {
    ...mapGetters({applications: 'cruddy/applications', currentApplication: 'cruddy/currentApplication'})
  }
}
</script>

