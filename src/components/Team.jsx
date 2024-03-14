import "../styles/team.css";
import React from "react";
import { Card } from "antd";
import image2 from "../assets/investing.jpeg";

const Team = () => {
  return (
    <div className="team">
      <h2>Team</h2>

      <p className="text1">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>

      <Card className="cardTeam" bodyStyle={{ padding: "0" }}>
        <div className="cardContentt">
          <div>
            <img className="imageTeam" src={image2} alt="image" />
            <h3>John Smith</h3>
            <p>Designation here</p>
          </div>

          <div className="contentTeam">
            <p>
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
              fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
              in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
              nec neque sed pellentesque viverra. Consectetur proin amet ut id
              facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
              egestas dolor est ipsum. Malesuada etiam mi gravida praesent
              interdu
            </p>
          </div>
        </div>
      </Card>

      <Card className="cardTeam" bodyStyle={{ padding: "0" }}>
        <div className="cardContentt">
          <div>
            <img className="imageTeam" src={image2} alt="image" />
            <h3>John Smith</h3>
            <p>Designation here</p>
          </div>

          <div className="contentTeam">
            <p>
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
              fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
              in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
              nec neque sed pellentesque viverra. Consectetur proin amet ut id
              facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
              egestas dolor est ipsum. Malesuada etiam mi gravida praesent
              interdu
            </p>
          </div>
        </div>
      </Card>

      <Card className="cardTeam" bodyStyle={{ padding: "0" }}>
        <div className="cardContentt">
          <div>
            <img className="imageTeam" src={image2} alt="image" />
            <h3>John Smith</h3>
            <p>Designation here</p>
          </div>

          <div className="contentTeam">
            <p>
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
              fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
              in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
              nec neque sed pellentesque viverra. Consectetur proin amet ut id
              facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
              egestas dolor est ipsum. Malesuada etiam mi gravida praesent
              interdu
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Team;
