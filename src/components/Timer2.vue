<template>
    <v-app>
    <div id="timer">       
        <div class="timer">
        <div class="time">
            <v-list class="text-h3">
                {{ formatTime }}
            </v-list>
        </div>
        <v-btn>
            <button v-on:click="start" v-if="!timerOn">Start</button>
            <button v-on:click="stop" v-if="timerOn">Stop</button>
        </v-btn>
        <v-btn>
            <button v-on:click="reset">Reset</button>
        </v-btn>
        </div>
    </div>
    </v-app>
    </template>

    <script>

    export default {
    name: 'timer',
    data() {
        return {
        min: 2,
        sec: 0,
        timerOn: false,
        timerObj: null,
        }
    },
    methods: {
        count: function() {
        if (this.sec <= 0 && this.min >= 1) {
            this.min --;
            this.sec = 59;
        } else if(this.sec <= 0 && this.min <= 0) {
            this.complete();
        } else {
            this.sec --;
        }
        },

        start: function() {
        let self = this;
        this.timerObj = setInterval(function() {self.count()}, 1000)
        this.timerOn = true;
        },

        stop: function() {
        clearInterval(this.timerObj);
        this.timerOn = false; 
        },

        reset: function(){
        this.min=2;
        this.sec=0;
        },

        complete: function() {
        clearInterval(this.timerObj)
        }
    },
    computed: {
        formatTime: function() {
        let timeStrings = [
            this.min.toString(),
            this.sec.toString()
        ].map(function(str) {
            if (str.length < 2) {
            return "0" + str
            } else {
            return str
            }
        })
        return timeStrings[0] + ":" + timeStrings[1]
        }
    }
    }
</script>
