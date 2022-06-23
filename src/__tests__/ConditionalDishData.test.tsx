import ReactDOM from "react-dom";
import { ConditionalDishData } from "../ConditionalDishData";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ConditionalDishData />, div);
});

it("matches snapshot", () => {
  const tree = renderer.create(<ConditionalDishData />).toJSON();
  expect(tree).toMatchSnapshot();
});
