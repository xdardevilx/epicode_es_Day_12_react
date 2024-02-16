import { useEffect, useState } from "react";
import musicFetch from "../data/get-fetch.API";
const MusicComponent = (props) => {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await musicFetch(props.query);
        console.log("data", data);
        setMusics(data);
      } catch (error) {
        console.error("Error fetching music:", error);
      }
    };

    fetchData();
  }, []);
  
  useEffect(() => {
    console.log("music", musics);
  }, [musics]);
  return (
    <div className="text-center">
      {musics.slice(0, 4).map((music, index) => (
        <img key={index} src={music.artist.picture_medium} />
      ))}
    </div>
  );
};

export default MusicComponent;
