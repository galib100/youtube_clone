import axios from 'axios'
const BASE_URL ='https://youtube-v31.p.rapidapi.com';
const options = {
    params: { 
      maxResults: '50'
    },
    headers: {
    //   'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Key': '441ce53b20msh686d8c35b081909p150596jsn6cff62b3956b',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  //dynamic url for common api fetching either get or post request
  export const fetchFromAPI = async (url)=>{
    const {data} =  await axios.get(`${BASE_URL}/${url}`,options);
    return data; 
  }