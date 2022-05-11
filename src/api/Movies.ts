import {Movie} from "../screens/MoviesPage";

export const getMoviesFromApi = (): Promise<Movie[]> => {
    return fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => {
            return json.movies;
        })
        .catch((error) => {
            console.error(error);
        });
};