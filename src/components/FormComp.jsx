import { Form } from "react-bootstrap";

const FormComp = ({handleChange}) => {
  return (
    <Form.Control
      type="search"
      className="w-50 m-auto"
      placeholder="Search Player"
      onChange={handleChange}
    />
  );
};

export default FormComp;
