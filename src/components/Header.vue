<template>
  <v-card
    max-width=""
    height="100px"
    class="mx-auto"
  >
    <v-toolbar
      color="rgb(31, 127, 56)"
      height="100px"
      dark
      class="toolbar"
    >
      <v-spacer></v-spacer>
      <!-- <v-img src="../assets/images/AppLogo.png" style="height:80px;width:70px"></v-img> -->
      <img src="../assets/images/AppLogo.png" class="logo-img">
      <v-spacer></v-spacer>
      <v-toolbar-title> Developing to: 335.Block R Phase 11 Johar Town  </v-toolbar-title>
      <v-btn icon :to="{name: 'Main'}" style="text-decoration:none">
        <v-icon>mdi-map-marker-outline</v-icon>
      </v-btn>
      <v-spacer></v-spacer>

   <div class="text-center">
<v-menu open-on-hover offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text color="white">
        Home
        </v-btn>
        <v-btn text color="white">
        Categories
        </v-btn>
        <v-btn text
          color="white"
          v-bind="attrs"
          v-on="on"
        >
          <span>Menu </span>
          <v-icon left> mdi-chevron-down </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index" route :to="item.route" style="margin-top:10px"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn class="button" :to="{name: 'blog'}" 
     text color="white"  slot="action">
       News
    </v-btn>
    <v-btn text color="white">
        About
      </v-btn>
     
  </div>

      <v-btn icon>
        <v-icon>mdi-bike</v-icon>
      </v-btn>
    </v-toolbar>
   
  </v-card>
</template>
<script>
export default {
    data(){
      return{
      items: [
        { title: 'Click Me1' ,route:'/blog' },
        { title: 'Click Me2' ,},
        { title: 'Click Me3' },
        { title: 'Click Me 2' },
      ],
    }
  }
}
</script>
<style>

.backcolor{
  background-color:rgb(0, 132, 67) ;
}
.button{
  text-decoration: none;
}

.button:hover{
  text-decoration: none;
}
.logo-img{
  height: 50px;width: 165px;
  transition: transform .3s ease-out;
}
.logo-img:hover{
transform: translate(0, -7px);
}
.toolbar{
  position: fixed;
}
</style>