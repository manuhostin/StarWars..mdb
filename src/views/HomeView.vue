<template>
  <div class="background-container">
    <h1 class="title">STAR WARS UNIVERSE</h1>
    <div class="button-container">
      <router-link to="/filmes" class="starwars-button">FILMES</router-link>
      <router-link to="/tv" class="starwars-button">SÉRIES</router-link>

    </div>
  </div>
</template>

<style scoped>
.background-container {
  width: 100%;
  height: 100vh;
  background-image: url('https://images4.alphacoders.com/132/1327480.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

.title {
  font-size: 3.5rem;
  font-family: 'Star Jedi', sans-serif;
  text-shadow: 0 0 10px #feda4a, 0 0 20px #feda4a;
  margin-bottom: 30px;
}

.button-container {
  display: flex;
  gap: 20px;
}

.starwars-button {
  font-size: 1.5rem;
  font-family: 'Star Jedi', sans-serif;
  padding: 15px 30px;
  color: white;
  background-color: #f73c1c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
}

.starwars-button:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}
</style>
