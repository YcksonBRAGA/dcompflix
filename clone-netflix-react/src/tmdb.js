const API_KEY = '68c6474b86823995e8292c406a8865c4';
const API_BASE = 'https://api.themoviedb.org/3';

/*

    1. originais da netflix;
    2. recomendados;
    3. em alta;
    4. ação;
    5. comedia;
    6. terror;
    7. romance;
    8. documentários;

*/

const basicFetch = async (endPoint) => {
    const req = await fetch(`${API_BASE}${endPoint}`);
    const json = await req.json();
    return json;
}

const getRandomArbitrary = (min, max, random = Math.random()) => {
    return Number.parseInt(random * (max - min) + min);
}

const getBrend = async (movies) => {
    const originals = (movies.filter((category)=>{
        return category.slug === 'originals';
    }))[0];
    return (originals.items.results[getRandomArbitrary(0, 20)]);
}

const getMovieInfo = async (movieId, type) => {
    if (type === movieId){
        return await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
    }
    
    return await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
}

const getHomeList = async () => {
    return [
        {
            slug: 'originals',
            title: 'Originais do Netflix',
            items: await basicFetch(`/discover/tv/?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            title: 'Recomendados para Você',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'topRated',
            title: 'Em Alta',
            items: await basicFetch(`/movie/popular?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'documentary',
            title: 'Documentários',
            items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        },
    ]
}

const tmdb = {
    getHomeList, getBrend, getMovieInfo

};

export default tmdb;