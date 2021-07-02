<template>
  <v-footer padless style="background-color:black">

     <v-row>
       
      <v-col cols="4" sm="12" lg="4" style="text-align:center">
        <img src="../assets/images/AppLogo.png" class="logo-image">
      </v-col>
      <v-col cols="4" sm="12" lg="4" style="color:white;">
          <p class="para1"><span class="span1">____</span>SUBWAY</p>
          <p class="para1"><span class="span1">____</span>No.91-T.Phase 2 DHA Commercial Plaza</p>
          <p class="para1"><span class="span1">____</span>Telephone 092-42-5707400</p>
          
      </v-col>
      <v-col cols="4" sm="12" lg="4">
       <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
         <v-icon class="icons" size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
  
</template>
<script>
export default {
    data(){
      return{
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  }
}
</script>
<style>
.footer,.teal{
  background-color: black;
}
.mx-4{
  border-right: 2px;
  color: yellow;
  position: relative;
    top: 18%;
}
.para1{
  margin-bottom:0rem !important;
}
.span1{
  position: relative;
  bottom: 6px;
  color: #FFAB00;
  padding-right: 10px;
}
.icons{
  border-right:2px solid #FFAB00;
  padding-right:10px;
}
.logo-image{
height: 50px;width: 165px;position: relative;top: 10px;left: -20px;
}
</style>
