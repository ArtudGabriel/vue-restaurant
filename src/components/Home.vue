<template>
    <Header />
    <h1>Olá {{name}}, bem-vindo(a)!</h1>
    <table class='table'>
        <tr>
            <td>ID</td>
            <td>Nome</td>
            <td>Telefone</td>
            <td>Endereço</td>
            <td>Atualizar Restaurante</td>
            <td>Apagar Restaurante</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.contact}}</td>
            <td>{{item.address}}</td>
            <td><router-link class="update" :to="'/update-restaurant/'+item.id">Atualizar</router-link></td>
            <button class="delete" v-on:click="deleteRestaurant(item.id)" >Apagar</button>
        </tr>
    </table>
</template>
<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    name: 'Home-Page',
    data() {
        return {
            name: '',
            restaurants: []
        }
    },
    components: {
        Header
    },
    methods: {
        async loadData() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if(!user)
        {
            this.$router.push({ name: 'Home-Page' });
        }
        let result = await axios.get('http://localhost:3000/restaurants');
        this.restaurants = result.data;
    },
        async deleteRestaurant(id) {
            let result = await axios.delete('http://localhost:3000/restaurants/'+id);
            if (result.status == 200) {
                console.alert("Restaurante apagado com sucesso!");
                this.loadData();
            }
        }
    },
    
    async mounted()
    {
        this.loadData();
    }
}
</script>

<style>

table {
    display: table;
    justify-content: center;
    width: 100%;
    border-collapse: collapse;
}

td {
    width: 160px;
    height: 40px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid #ddd;
    padding: 8px;
}

button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.2s ease;
    display: inline-block;
}

button.delete {
    background-color: #e74c3c;
    color: white;
    margin: 10px auto;
}

button.delete:hover {
    background-color: #c0392b;
}

a.router-link {
    display: inline-block;
    padding: 10px 15px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

a.router-link:hover {
    background-color: #2980b9;
    transform: scale(1.05);
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}

tr:hover {
    background-color: #f1f1f1;
}

a.update {
    display: inline-block;
    padding: 8px 15px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

a.update:hover {
    background-color: #2980b9;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

a.update:active {
    background-color: #1c6ea4;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>