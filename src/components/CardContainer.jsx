import { Col, Container, Row } from "react-bootstrap";
import { data } from "../helper/data";
import Card from "react-bootstrap/Card";
import PlayerCard from "./PlayerCard";
import { useState } from "react";
import FormComp from "./FormComp";

const CardContainer = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <>
      <FormComp handleChange={handleChange} />
      <Container className="rounded my-4 p-3 card-container">
        <Row className="justify-content-center gap-3">
          {filteredData.map((player, i) => (
            <Col xl={3} lg={4} md={6} key={i}>
              <PlayerCard {...player} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
