<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  width: 65%;
}

table.center {
  margin-left: auto; 
  margin-right: auto;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

</style>
<template>
    <div class="container">
        <h2  align="center">PLANES</h2>
        <table class="center">
            <thead>
            <tr>
                <th>PLANE NUMBER</th>
                <th>DEPARTURE</th>
                <th>DESTINATION</th>
                <th>STATUS</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in planes" :key="item.id">
                  <td align="center">{{ item.planeObject.plane_number }}</td>
                  <td align="center">{{ item.planeObject.departure }}</td>
                  <td align="center">{{ item.planeObject.destination }}</td>
                  <td align="center">{{ item.planeObject.status }}</td>
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