<template>
    <v-app>
        <div>
            <h1>Match Result Input</h1>
            <div>
            <ul>
                <li><input v-model="name"></li>
                <v-btn>
                <li><button v-on:click="addwinorlose">Add</button></li>
                </v-btn>
            </ul>
            </div>
        </div>
    </v-app>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore';

    export default {
    name: 'winorloseAdd',
    data: function () {
        return {
        db: null,
        name: ''
        }
    },
    created: function() {
        this.db = firebase.firestore()
    },
    methods: {
        addwinorlose: function () {
        var _this = this       
        this.db.collection('winorloses').add({
            name: _this.name
        })
        .then(function () {          
            _this.name = ''
        })
        .catch(function () {
        })
        }
    }
    }
</script>

