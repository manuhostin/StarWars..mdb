<script setup>
import { ref, onMounted } from 'vue';
import api from '@/plugins/axios';

const isLoading = ref(false);
const genres = ref([]);
const movies = ref([]);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR');

const listStarWarsMovies = async (genreId = null) => {
    isLoading.value = true;
    const start = Date.now();

    const response = await api.get('search/movie', {
        params: {
            query: 'Star Wars',
            language: 'pt-BR'
        }
    });

    if (genreId) {
        movies.value = response.data.results.filter(movie => movie.genre_ids.includes(genreId));
    } else {
        movies.value = response.data.results;
    }

    const elapsed = Date.now() - start;
    const remaining = 2000 - elapsed;
    if (remaining > 0) {
        await delay(remaining);
    }

    isLoading.value = false;
};

const fetchStarWarsGenres = async () => {
    const response = await api.get('search/movie', {
        params: {
            query: 'Star Wars',
            language: 'pt-BR'
        }
    });

    const allGenresResponse = await api.get('genre/movie/list?language=pt-BR');
    const allGenres = allGenresResponse.data.genres;

    const genreIds = new Set(response.data.results.flatMap(movie => movie.genre_ids));
    genres.value = allGenres.filter(genre => genreIds.has(genre.id));
};

onMounted(async () => {
    await fetchStarWarsGenres();

    await listStarWarsMovies();
});

</script>

<template>
    <div v-if="isLoading" class="loading">
    </div>
    <h1>Filmes do Universo <span>Star Wars</span></h1>
    <ul class="genre-list">
        <li
            v-for="genre in genres"
            :key="genre.id"
            class="genre-item"
            @click="listStarWarsMovies(genre.id)"
        >
            {{ genre.name }}
        </li>
    </ul>
    <div class="movie-list">
        <div v-for="item in movies" :key="item.id" class="movie-card">
            <img
                :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
                :alt="item.title"
                @click="openMovie(movie.id)"
            />
            <div class="movie-details">
                <p class="movie-title">{{ item.title }}</p>
                <p class="movie-release-date">{{ formatDate(item.release_date) }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
span {
  color: #f5c518;
}
* {
  font-family: 'Star Jedi', sans-serif;
}
body {
    background-color: #000;
    color: #fff;
    margin: 0;
    font-family: Arial, sans-serif;
}

.movie-genres {
  background-color: #000;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 0.2rem;
  }

.genre-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    list-style: none;
    padding: 0;
}
h1 {

  text-align: center !important;
}
.genre-item {
    background-color: #000;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    align-self: center;
    color: #f5c518;
    display: flex;
    justify-content: center;
}

.genre-item:hover {
    cursor: pointer;
    background-color: #f5c518;
    color: #000;
    box-shadow: 0 0 0.5rem #f5c518;
}

.movie-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.movie-card {
    width: 15rem;
    height: 30rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0 0.5rem #000;
}

.movie-card img {
    width: 100%;
    height: 20rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem #000;
}

.movie-details {
    padding: 0 0.5rem;
}

.movie-title {
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 1.3rem;
    height: 3.2rem;
}

.genre-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    list-style: none;
    margin-bottom: 2rem;
}
</style>
