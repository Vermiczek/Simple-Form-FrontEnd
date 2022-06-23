import ReactDOM from "react-dom";
import { PreparationTimeData } from "../PreparationTimeData";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PreparationTimeData />, div);
});

it("matches snapshot", () => {
  const tree = renderer.create(<PreparationTimeData />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Input value", () => {
  it("update on change", () => {
    const { queryByTestId } = render(<PreparationTimeData />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const input1: any = queryByTestId("input-hours");
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const input2: any = queryByTestId("input-minutes");
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const input3: any = queryByTestId("input-seconds");

    fireEvent.change(input1, { target: { value: 0 } });
    fireEvent.change(input2, { target: { value: 1 } });
    fireEvent.change(input3, { target: { value: 0 } });

    expect(input1.value).toBe("00");
  });
});
