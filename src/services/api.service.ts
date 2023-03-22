const base_url = process.env.NEXT_PUBLIC_API_DOMIN as string;
const api_key = process.env.NEXT_PUBLIC_API_KEY as string;

export const API_REQUEST = {
  trending: `${base_url}/trending/all/week?api_key=${api_key}&language=en-US`,
  top_reted: `${base_url}/movie/top_rated?api_key=${api_key}&language=en-US`,
}