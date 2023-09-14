export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '38041bee88msh00c2313c3dd9646p1291d0jsna30e81a6bd0b',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };

export const fetchData = async (url,options) => {
      const response = await fetch(url,options);
      const data = await response.json();

      return data;
}