export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "59b471c9d0mshfa1d0f02c5c9c46p1c1b70jsn30fa608514f2",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "59b471c9d0mshfa1d0f02c5c9c46p1c1b70jsn30fa608514f2",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
