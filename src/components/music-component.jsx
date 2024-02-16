/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import musicFetch from "../data/get-fetch.API";
import { Button, Col } from "react-bootstrap";
const MusicComponent = (query) => {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await musicFetch(query.query);
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
    <>
      {musics.slice(0, 4).map((music, index) => (
        <Col
          key={index}
          className="d-flex flex-column justify-content-center align-items-center ">
          <img src={music.artist.picture_medium} />
          <Button className="bi bi-heart"> Add playlist</Button>
        </Col>
      ))}
    </>
  );
};

export default MusicComponent;
