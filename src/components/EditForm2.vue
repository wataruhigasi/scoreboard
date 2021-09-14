<template>
    <v-app>
        <div class="edit-form">
            <input type="text" :value="message2" @input="doUpdate2">
        </div>
    </v-app>
</template>

<script>
export default{
    name: 'EditForm2',
    computed: {
        message2(){
            return this.$store.getters.message2
        }
    },
    methods: {
        doUpdate2(event2){
            this.$store.dispatch('doUpdate2',event2.target.value)
        }
    }
}
</script>