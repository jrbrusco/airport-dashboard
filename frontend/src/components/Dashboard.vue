
<template>
  <div class="dashboard">
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-md-8">
            <h1 align="center">AIRPORT DASHBOARD</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <AddPlane @addPlane="addPlane($event)" />
        </div> 
        <div class="col-md-4">
          <UpdatePlane @updatePlane="updatePlane($event)" />
        </div>
        <div class="col-md-4">
          <DeletePlane @deletePlane="deletePlane($event)" />
        </div>
      </div>
    </div>
    <div class="row mrgnbtm">
        <Planes v-if="planes.length > 0" :planes="planes" />
    </div>
    <div align="center">
      <img src="../assets/plane.png"> 
    </div>
  </div>
</template>
 
<script>
  import AddPlane from './AddPlane.vue'
  import Planes from './Planes.vue'
  import DeletePlane from './DeletePlane.vue'
  import UpdatePlane from './UpdatePlane.vue'
  import { getAllPlanes, addPlane, deletePlane, updatePlane } from '../services/planeServices'

  export default {
    name: 'Dashboard',
    components: {
      AddPlane,
      DeletePlane,
      UpdatePlane,
      Planes
    },
    
    data() {
        return {
            planes: [],
            numberOfPlanes: 0,
            text: ''
        }
    },
    methods: {
      getAllPlanes() {
        getAllPlanes().then(response => {
          console.log(response)
          this.planes = response
          this.numberOfPlanes = this.planes.length
        })
      },
      addPlane(data) {
        console.log('adding plane: ', data)
        addPlane(data).then(response => {
          console.log(response);
          this.getAllPlanes();
        });
      },
      deletePlane(data) {
        console.log('deleting plane: ', data)
        deletePlane(data).then(() => this.getAllPlanes())
        .catch(err => console.log(err));
      },
      updatePlane(data) {
        console.log('updating plane: ', data)
        updatePlane(data).then(response => {
          console.log(response);
          this.getAllPlanes();
        });
      }
    },
    mounted () {
      this.getAllPlanes();
    }
  }
</script>