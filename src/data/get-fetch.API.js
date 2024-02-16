const musicFetch = async (artistName) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName
    );
    if (response.ok) {
      let { data } = await response.json();
      // console.log(data);
      return data;
    }
  } catch (err) {
    console.log("qualcosa è andato storto", err);
  }
};
export default musicFetch;
