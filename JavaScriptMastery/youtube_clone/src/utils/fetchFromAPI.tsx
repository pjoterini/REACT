import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const options = {
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
    maxResults: "10",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// AXIOS FETCH
export const fetchFromAPI = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

// FETCH API
export const fetchFetchFromAPI = async (url: string) => {
  let response = await fetch(`${BASE_URL}/${url}`, options);
  let data = await response.json();

  return await data;
};

// export const fetchFromAPI = () => {
//   const options = {
//     method: "GET",
//     url: "https://youtube-v31.p.rapidapi.com/captions",
//     params: { part: "snippet", videoId: "M7FIvfx5J10", maxResults: "10" },
//     headers: {
//       "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
//       "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//     },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };
