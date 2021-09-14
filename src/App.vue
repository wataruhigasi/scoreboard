<template>
  <v-app>
    <v-app-bar color="primary" dark app clipped-left>
      <v-toolbar-title>BASKETBALL</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-list-item class="text-h1 teal--text text--accent-3">Score Board</v-list-item>
      

        <v-row>
          <!--ここにタイマー１０分-->
          <v-col col="2">
            <Timer10></Timer10>
          </v-col>

          <!--ここにタイマー２分-->
          <v-col col="2">
            <Timer2></Timer2>
          </v-col>

      
          <!--チームA-->
          <v-col cols="2">
            <p>{{ message }}</p>
            <EditForm></EditForm>
          </v-col>
          <v-col clos="2">
              <v-btn><button v-on:click="increment()">threePoint</button></v-btn>
                <h1>{{ threePoint }}</h1>
              <v-btn><button v-on:click="increment1()">twoPoint</button></v-btn>
                <h1>{{ twoPoint }}</h1>    
              <v-btn><button v-on:click="increment2()">onePoint</button></v-btn>
                <h1>{{ onePoint }}</h1>
              <p>得点</p>
                <h1>{{ threePoint+twoPoint+onePoint }}</h1>
          </v-col>

          <!--チームB-->
          <v-col cols="2">
            <p>{{ message2 }}</p>
            <EditForm2></EditForm2>
          </v-col>
          <v-col cols="2">
                <v-btn><button v-on:click="increment3()">threePoint</button></v-btn>
                  <h1>{{ threePoint2 }}</h1>
                <v-btn><button v-on:click="increment4()">twoPoint</button></v-btn>
                  <h1>{{ twoPoint2 }}</h1>    
                <v-btn><button v-on:click="increment5()">onePoint</button></v-btn>
                  <h1>{{ onePoint2 }}</h1>
                <p>得点</p>
                  <h1>{{ threePoint2+twoPoint2+onePoint2 }}</h1>
          </v-col>
          <v-col>
            <Add></Add>
            <Index></Index>
          </v-col>
        </v-row>
    </v-content>
  </v-app>
</template>

<script>

import EditForm from '@/components/EditForm.vue'
import EditForm2 from '@/components/EditForm2.vue'
import Timer10 from './components/Timer10.vue'
import Timer2 from './components/Timer2.vue'
import Add from './components/winorlose/Add.vue'
import Index from './components/winorlose/Index.vue'

export default {
  name: 'app',
    components: {
          EditForm,
          EditForm2,
          Timer10,
          Timer2,
          Add,
          Index
    },
    methods: {
        increment : function(){
            this.$store.commit('increment') 
        },
        increment1 : function(){
            this.$store.commit('increment1')
        },
        increment2 : function(){
            this.$store.commit('increment2')
        },
        increment3 : function(){
            this.$store.commit('increment3')
        },
        increment4 : function(){
            this.$store.commit('increment4')
        },
        increment5 : function(){
            this.$store.commit('increment5')
        }
    },
    computed:{
        message(){
          return this.$store.getters.message
        },
        message2(){
          return this.$store.getters.message2
        },
        threePoint : function(){
            return this.$store.state.threePoint
        },
        twoPoint : function(){
            return this.$store.state.twoPoint
        },
        onePoint : function(){
            return this.$store.state.onePoint
        },
        threePoint2 : function(){
            return this.$store.state.threePoint2
        },
        twoPoint2 : function(){
            return this.$store.state.twoPoint2
        },
        onePoint2 : function(){
            return this.$store.state.onePoint2
        }
    }
}
</script>
