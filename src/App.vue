
<script setup></script>

<template>
  <header>
    <nav>
      <p> StarWars.mdb </p>
      <router-link to="/">Home</router-link>
      <router-link to="/filmes">Filmes</router-link>
      <router-link to="/tv">Programas de TV</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  font-size: 1.2rem;
  padding: 0 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

nav {
  display: flex;
  column-gap: 2rem;
  align-items: center;
}

nav p {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  color: #FFD700;
  font-family: 'Star Jedi', sans-serif;
}

nav a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease-in-out;
}

nav a:hover {
  color: #FFD700;
}

nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background-color: #FFD700;
  bottom: -2px;
  left: 0;
  transition: width 0.3s ease-in-out;
}

nav a:hover::after {
  width: 100%;
}

nav a.router-link-active {
  color: #FFD700;
  font-weight: bold;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }

  nav {
    flex-wrap: wrap;
    row-gap: 1rem;
    justify-content: center;
  }
}

</style>
