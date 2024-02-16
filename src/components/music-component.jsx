/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import musicFetch from "../data/get-fetch.API";
import { Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
const MusicComponent = (query) => {
  const [musics, setMusics] = useState([]);
  const dispatch = useDispatch();
  
  const addOn = () => {
    console.log("addOn");
    dispatch({ type: "ADD_SONG", payload: musics });
  };

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
          <Button onClick={addOn} className="bi bi-heart">
            Add playlist
          </Button>
        </Col>
      ))}
    </>
  );
};

export default MusicComponent;
