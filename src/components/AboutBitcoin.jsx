import React from "react";
import "../styles/sentiment.css";
import { Card} from "antd";
import image2 from '../assets/investing.jpeg'; 
import image3 from '../assets/img.jpeg'; 



const AboutBitcoin = () => {
  return (
    <div className="sentiment">
      <h2>About Bitcoin</h2>

      <h4 className="bitcoin">What is Bitcoin?</h4>

      <p className="para">
        Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </p>

      <h4 className="bitcoin">Lorem ipsum dolor sit amet</h4>

      <p className="para">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus.
        <br /> <br />
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
        vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum. Odio cursus phasellus velit in senectus
        enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet
        magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent
        massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
        phasellus. Integer pellentesque enim convallis ultricies at.
        <br /> <br />
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>

      <h2 className="holding">Already Holding Bitcoin?</h2>

<div className="cards">
<Card
      className="card1"
      bodyStyle={{padding: "0"}}
          >
<div className="cardContent">
<div>
            <img className='image2' src={image2} alt="Logo"/>
            </div>

            <div>
                <p className="calculate">Calculate your Profits</p>

                <div className="btn btn-light">
                   Check Now
                </div>
            </div>
</div>

          </Card>

          <Card
      className="card2"
      bodyStyle={{padding: "0"}}
          >
<div className="cardContent">
<div>
            <img className='image2' src={image3} alt="Logo"/>
            </div>

            <div>
                <p className="calculate">Calculate your tax liability</p>

                <div className="btn btn-light">
                   Check Now
                </div>
            </div>
</div>

          </Card>
</div>

<p className="par">
    Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
    </p>
    </div>
  );
};

export default AboutBitcoin;
