<template>
  <div class="container">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h3>Update a Plane Status:</h3>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputEmail1">ID</label>
                        <input type="text" class="form-control" v-model="planeNumber" name="id" id="id" />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputPassword1">Rev</label>
                        <input type="text" class="form-control" v-model="departure" name="rev" id="rev" />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputEmail1">Plane Number</label>
                        <input type="text" class="form-control" v-model="planeNumber" name="planenumber" id="planenumber" />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputPassword1">Departure</label>
                        <input type="text" class="form-control" v-model="departure" name="departure" id="departure" />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputEmail1">Destination</label>
                        <input type="text" class="form-control" v-model="destination" name="destination" id="destination" />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputPassword1">Status</label>
                        <input type="text" class="form-control" v-model="status" name="status" id="status" />
                    </div>
                </div>
                <button type="button" @click='updatePlane()' class="btn btn-update">UPDATE</button>
                <button type="button" @click='clearForm()' class="btn btn-clear">Clear</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'UpdatePlane',
  data() {
    return {
        id: '',
        rev: '',
      planeNumber: '',
      departure: '',
      destination: '',
      status: ''
    }
  },
  methods: {
        updatePlane() {
        console.log(this.planeNumber)
        const payload = {
            plane_number: this.planeNumber,
            departure: this.departure,
            destination: this.destination,
            status: this.status

          }
          this.$emit('addPlane', payload)
          this.clearForm();
      },
      clearForm() {
          this.planeNumber = "";
          this.departure = "";
          this.destination = "";
          this.status = "";
      }
  }
}
</script>