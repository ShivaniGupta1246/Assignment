import React, { Fragment, useState } from "react";
import randomcolor from "randomcolor";
import faker from "faker";
import call from "./icons8-call-50.png";
import video from "./icons8-video-24.png";
import chat from "./icons8-chat-50.png";
import data from "./data.json";
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const Card = (props) => {
  const levelColor = randomcolor();
  const handleChatClick = (email) => {
    window.location.href = `mailto:${email}`;


  };
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  
  return (
    <ul>
      {props.data.map((item,index) => (
        <Fragment key={item.name}>
          <li>
            <div className="card">
              <div className="image">
                <img
                  src={item.imageUrl}
                  alt="Profile"
                  style={{ borderColor: levelColor }}
                />
              </div>
              <div className="card-body">
                <h4>{item.name}</h4>
                <p>{item.designation}</p>
              </div>
              {/* <div className="card-footer" style={{ background: levelColor }}>
             
                <img
                  src={call}
                  alt="Call"
                />
                <img
                  src={video}
                  alt="Video"
                /> 

              </div> */}
             

              <a  className="kuchnhi" style={{ background: levelColor }} onClick={toggleDetails}>
                {showDetails ? "Hide Details" : "More Information"}
              </a>
              {showDetails && (
                <div className="details" style={{ background: levelColor }}>
                  <p>Email: {item.email}</p>
                  <p>Contact Number: {item.contactNumber}</p>
                  <p>Age: {item.age}</p>
                  <p>Date of Birth: {item.dob}</p>
                  <p>Address: {item.address}</p>
                </div>
              )}

            </div>
            {item.children?.length && <Card data={item.children} />}
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

const Chart = () => {
  return (
    <div className="org-tree">
      <Card data={data} />
    </div>
  );
};

export default Chart;
