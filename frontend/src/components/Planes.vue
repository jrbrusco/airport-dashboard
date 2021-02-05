<style>
table, td {
  border: .25px solid grey;
  border-collapse: collapse;
  width: 100%;
  font-size: 18px;
  color: #ffffff;
  font-family: 'Courier New', monospace;
}
th {
    border: 1px solid grey;
    border-collapse: collapse;
    font-size: 21px;
    font-family: Georgia, serif;
    color: #ffd700;
}

table.center {
  margin-left: auto; 
  margin-right: auto;
}

tr:nth-child(even) {
  background-color: #000000;
}
tr:nth-child(odd) {
  background-color: #000000;
}

</style>
<template>
    <div class="container">
    <h1  align="center"> </h1>
        <table class="center">
            <thead>
            <tr>
                <th>PLANE NUMBER</th>
                <th>DEPARTURE</th>
                <th>DESTINATION</th>
                <th>STATUS</th>
                <th>ID</th>
                <th>Rev</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in planes" :key="item.id">
                  <td align="center">{{ item.planeObject.plane_number }}</td>
                  <td align="center">{{ item.planeObject.departure }}</td>
                  <td align="center">{{ item.planeObject.destination }}</td>
                  <td align="center">{{ item.planeObject.status }}</td>
                  <td>{{ item._id }}</td>
                  <td>{{ item._rev }}</td>
              </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
    export default {
        name: 'planes',
        props: ['planes']
     }
</script>