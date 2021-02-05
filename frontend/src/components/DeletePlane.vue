<template>
  <div class="container">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h3>Delete a Plane Status:</h3>
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
                </div>
                <button type="button" @click='deletePlane()' class="btn btn-delete">DELETE</button>
                <button type="button" @click='clearForm()' class="btn btn-clear">Clear</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'DeletePlane',
  data() {
    return {
      ID: '',
      rev: ''
    }
  },
  methods: {
      deletePlane(id, rev) {
          console.log("planes", id, rev)
          const payload = {
              _id: id,
              _rev: rev
          }
          this.$emit('deletePlane', payload)
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