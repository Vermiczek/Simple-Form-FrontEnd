import CustomForm from "../CustomForm";

import renderer from "react-test-renderer";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CustomForm />, div);
});

it("matches snapshot", () => {
  const tree = renderer.create(<CustomForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
