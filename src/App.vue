<template>
  <router-view />
</template>
<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.signup {
    width: 200px;
}

.register input, .login input, .add input {
    width: 300px;
    height: 30px;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.register button, .login button, .add button {
    width: 310px;
    height: 35px;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    border: none;
    background-color: #28a745;
    color: white;
    cursor: pointer;
}

.register button:hover, .login button:hover {
    background-color: #1c9e38;
}

.register button:active, .login button:active {
    background-color: #21a540;
}

</style>
