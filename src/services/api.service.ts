const base_url = process.env.NEXT_PUBLIC_API_DOMIN as string;
const api_key = process.env.NEXT_PUBLIC_API_KEY as string;

export const API_REQUEST = {
  trending: `${base_url}/trending/all/week?api_key=${api_key}&language=en-US`,
  top_reted: `${base_url}/movie/top_rated?api_key=${api_key}&language=en-US`,
  tv_top_reted: `${base_url}/tv/top_rated?api_key=${api_key}&language=en-US`,
  popular: `${base_url}/movie/popular?api_key=${api_key}&language=en-US`,
  documentary: `${base_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=99`,
  action: `${base_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=28`,
  kids: `${base_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=16`,
  horror: `${base_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=27`,
  romance: `${base_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=10749`,
}