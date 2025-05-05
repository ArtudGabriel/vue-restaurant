<template>
    <Header />
    <h1>Olá {{name}}, bem-vindo(a)!</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter restaurant name" v-model="restaurants.name"/><br/>
        <input type="text" name="address" placeholder="Enter restaurant address" v-model="restaurants.address"/><br />
        <input type="text" name="contact" placeholder="Enter restaurant contact" v-model="restaurants.contact"/><br/>
        <button type="button" v-on:click="updateRestaurant">Atualizar o restaurante</button>
    </form>
</template>
<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    name: 'Update-Page',
    components: {
        Header
    },
    data() {
        return {
            restaurants: {
            name: '',
            address: '',
            contact: ''
        }
    }
    },
    methods: {
        async updateRestaurant() {
            const result = await axios.put('http://localhost:3000/restaurants/'+this.$route.params.id, {
                name: this.restaurants.name,
                address: this.restaurants.address,
                contact: this.restaurants.contact,
            });
            if(result.status == 200) {
                this.$router.push({ name: 'Home-Page' });
            }
        }
     },
    async mounted()
    {
        let user = localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({ name: 'SignUp' });
        }
        const result = await axios.get('http://localhost:3000/restaurants/' + this.$route.params.id);
        console.warn(result.data);
        this.restaurants = result.data;
    }
}
</script>

<style>
</style>