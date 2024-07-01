import React, { useState } from "react";
import { Card } from "react-bootstrap";

const PlayerCard = ({ img, name, statistics }) => {
  const [showImage, setShowImage] = useState(true);
  const handleClick = () => {
    setShowImage(!showImage);
  };
  return (
    <div>
      <Card
        className="rounded-2 m-auto player-card"
        role="button"
        onClick={handleClick}
      >
        {showImage ? (
          <Card.Img variant="top" src={img} className="player-logo" />
        ) : (
          <ul className="m-auto">
            {statistics.map((item, i) => (
              <li className="list-unstyled h5 text-start" key={i}>
                {" "}
                🏀 {item}
              </li>
            ))}
          </ul>
        )}

        <Card.Footer>
          <Card.Title>{name}</Card.Title>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default PlayerCard;
