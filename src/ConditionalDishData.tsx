import { Field, useFormikContext } from "formik";
import { StyledConditionalDishData } from "./styles/ConditionalDishData.styled";

//component responsible for viewing the correct input fields depending on which dish type was chosen. The data is also
//validated and doesn't allow invalid data to be submitted
export const ConditionalDishData = () => {
  const { values } = useFormikContext<any>();
  if (values.type === "pizza")
    return (
      <StyledConditionalDishData>
        <label>Number of slices</label>
        <Field
          className="styled-input"
          type="number"
          min="0"
          name="no_of_slices"
        />
        <label>Diameter</label>
        <Field
          className="styled-input"
          type="number"
          min="0"
          step="0.01"
          name="diameter"
        />
      </StyledConditionalDishData>
    );

  if (values.type === "soup")
    return (
      <StyledConditionalDishData>
        <label>Spiciness scale</label>
        <Field
          className="styled-input"
          type="range"
          min="1"
          max="10"
          name="spiciness_scale"
        />
        <div>{values.spiciness_scale}</div>
      </StyledConditionalDishData>
    );

  if (values.type === "sandwich")
    return (
      <StyledConditionalDishData>
        <label>Slices of bread</label>
        <Field className="styled-input" type="number" name="slices_of_bread" />
      </StyledConditionalDishData>
    );

  return <>Choose your dish!</>;
};
