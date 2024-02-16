import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Shuffle from "../assets/imgs/icon/shuffle.png";
import Prev from "../assets/imgs/icon/prev.png";
import Play from "../assets/imgs/icon/play.png";
import Next from "../assets/imgs/icon/next.png";
import Repeat from "../assets/imgs/icon/repeat.png";
function PlayerComponent() {
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <Container fluid>
        <Row className="h-100">
          <Col lg={10} className="offset-lg-2">
            <Row className="h-100 flex-column justify-content-center align-items-center">
              <Col xs={6} md={4} className="playerControls">
                <div className="d-flex">
                  <a href="#">
                    <img src={Shuffle} alt="shuffle" />
                  </a>
                  <a href="#">
                    <Image src={Prev} alt="prev" />
                  </a>
                  <a href="#">
                    <Image src={Play} alt="play" />
                  </a>
                  <a href="#">
                    <Image src={Next} alt="next" />
                  </a>
                  <a href="#">
                    <Image src={Repeat} alt="repeat" />
                  </a>
                </div>
                <ProgressBar className="mt-3" now={250} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PlayerComponent;
