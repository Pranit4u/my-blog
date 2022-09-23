import React, { useState } from "react";
import axios from 'axios';
import Blur from 'react-css-blur'

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Input,
  FormGroup
} from "reactstrap";

// core components


function SomeoneSection() {
  const [blurOn, setBlurOn] = useState(true);
  const [passCode, setPassCode] = useState("");

  const [items, setItems] = React.useState([
    {
      src: require("assets/img/bg1.jpg"),
      altText: "Nature, United States",
      caption: "Nature, United States"
    },
    {
      src: require("assets/img/bg3.jpg"),
      altText: "Somewhere Beyond, United States",
      caption: "Somewhere Beyond, United States"
    },
    {
      src: require("assets/img/bg4.jpg"),
      altText: "Yellowstone National Park, United States",
      caption: "Yellowstone National Park, United States"
    }
  ]);

  const [fetched, setFetched] = React.useState(false);

  const getPictures = async () => {
    const res = await axios.get('https://pranit-blog.herokuapp.com/addPicture/get', {
      params: {
        type: "Someone"
      }
    });
    if (res.data.length !== 0) {
      setFetched(true);
      setItems(res.data)
    } else {
      // alert("Patient Data not Found");
    }
  }
  if (!fetched) {
    getPictures();
  }

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const handleChange = (e) => {
    var st = e.target.value
    setPassCode(st);
    st = st.toLowerCase().trim()
    if (st === "april") {
      setBlurOn(false);
    }
  }

  return (
    <>

      <div className="section" id="my-someone">
        <Container>
          <div className="title">
            <h4>Something</h4>
            {blurOn ? <div><FormGroup style={{ width: 200, position: "absolute", left: "50%", transform: "translate(-50%, -50%)" }} className="has-success">
              <Input
                className="form-control-success"
                type="text"
                placeholder="Enter passcode to view"
                onChange={handleChange}
                value={passCode}
              ></Input>
            </FormGroup><br />
              <br /></div> : <div />}
          </div>

          <Row className="justify-content-center">
            <Blur radius={blurOn ? '15px' : '0'} transition="400ms">
              <Col lg="8" md="12">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>{item.caption}</h5>
                        </div>
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <i className="now-ui-icons arrows-1_minimal-left"></i>
                  </a>
                  <a
                    className="carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <i className="now-ui-icons arrows-1_minimal-right"></i>
                  </a>
                </Carousel>
              </Col>
            </Blur>
          </Row>
        </Container>
      </div>

    </>
  );
}

export default SomeoneSection;
