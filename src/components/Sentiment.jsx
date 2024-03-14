import React from "react";
import "../styles/sentiment.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Card, Progress } from "antd";
import { FaArrowTrendUp } from "react-icons/fa6";

import Slider from "react-slick";

const Sentiment = () => {
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray", borderRadius: '50%' }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="sentiment">
      <h2>Sentiment</h2>
      <h3 className="head">
        Key Events <BsFillInfoCircleFill color="gray" />
      </h3>
      <Slider {...settings}>
        <div>
          <Card
            bodyStyle={{ backgroundColor: "#a9bbff" }}
            style={{
              width: 400,
            }}
          >
            <div className="card">
              <div className="iconn">
                <FaArrowTrendUp color="white" />
              </div>

              <div>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis
                </h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Explicabo incidunt tempora perspiciatis fuga, consequatur
                  exercitationem aliquid assumenda nobis.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card
            bodyStyle={{ backgroundColor: "#c9ffe5" }}
            style={{
              width: 400,
            }}
          >
            <div className="card">
              <div className="iconn">
                <FaArrowTrendUp color="white" />
              </div>

              <div>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis
                </h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Explicabo incidunt tempora perspiciatis fuga, consequatur
                  exercitationem aliquid assumenda nobis.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card
            bodyStyle={{ backgroundColor: "#efffc4" }}
            style={{
              width: 400,
            }}
          >
            <div className="card">
              <div className="iconn">
                <FaArrowTrendUp color="white" />
              </div>

              <div>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis
                </h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Explicabo incidunt tempora perspiciatis fuga, consequatur
                  exercitationem aliquid assumenda nobis.
                </p>
              </div>
            </div>
          </Card>
        </div>


        <div>
          <Card
            bodyStyle={{ backgroundColor: "#cce8ff" }}
            style={{
              width: 400,
            }}
          >
            <div className="card">
              <div className="iconn">
                <FaArrowTrendUp color="white" />
              </div>

              <div>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis
                </h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Explicabo incidunt tempora perspiciatis fuga, consequatur
                  exercitationem aliquid assumenda nobis.
                </p>
              </div>
            </div>
          </Card>
        </div>
        
      </Slider>

      <h3 className="head">
       Analyst Estimates <BsFillInfoCircleFill color="gray" />
      </h3>

      <div className="progress">

      <Progress type="circle" percent={76}  strokeColor= '#4caf50'/>

      <div className="content0">
      <p className="prog">Buy <Progress percent={76} strokeColor='#449e48'/></p>
     <p className="prog">Hold   <Progress percent={8} strokeColor='gray'/></p>
     <p className="prog">Sold  <Progress percent={16} strokeColor='#ff0000'/></p>
      </div>
      </div>
    </div>
  );
};

export default Sentiment;
