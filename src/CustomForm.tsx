import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { ConditionalDishData } from "./ConditionalDishData";
import { PreparationTimeData } from "./PreparationTimeData";
import { StyledCustomForm } from "./styles/CustomForm.styled";

export const CustomForm = () => {
  const [error, setError] = useState("");

  return (
    <StyledCustomForm>
      <h1>Place your order!</h1>
      <Formik
        initialValues={{
          name: "",
          preparation_time: "00:00:00",
          type: "pizza",
          no_of_slices: 4,
          diameter: 50,
          spiciness_scale: 1,
          slices_of_bread: 2,
        }}
        validate={(values) => {
          const errors: any = {};
          if (!values.name) {
            errors.name = "Name required";
          }
          if (!values.type) {
            errors.type = "Type required";
          }
          if (values.type === "none") {
            errors.type = "Type required";
          }

          if (values.type === "pizza") {
            if (!values.diameter) {
              errors.diameter = "Diameter required";
            }
            if (Number(values.diameter) < 0) {
              values.diameter = 0;
              errors.diameter = "Wrong diameter value";
            }
            if (!values.no_of_slices) {
              errors.no_of_slices = "Number of slices required";
            }
            if (Number(values.no_of_slices) < 0) {
              values.no_of_slices = 0;
              errors.no_of_slices = "Wrong number of slices value";
            }
          }
          if (values.type === "soup") {
            if (!values.spiciness_scale) {
              errors.spiciness_scale = "Spiciness meter value required";
            }
            if (Number(values.spiciness_scale) < 0) {
              values.spiciness_scale = 0;
              errors.spiciness_scale = "Wrong spiciness value";
            }
          }

          if (values.type === "sandwich") {
            if (!values.slices_of_bread) {
              errors.slices_of_bread = "Number of slices required";
            }
            if (Number(values.slices_of_bread) < 0) {
              values.slices_of_bread = 0;
              errors.no_of_slices = "Invalid number of slices";
            }
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          var payload = {};
          if (values.type === "pizza") {
            payload = {
              name: values.name,
              type: values.type,
              preparation_time: values.preparation_time,
              no_of_slices: values.no_of_slices,
              diameter: values.diameter,
            };
          } else if (values.type === "sandwich") {
            payload = {
              name: values.name,
              type: values.type,
              preparation_time: values.preparation_time,
              slices_of_bread: values.slices_of_bread,
            };
          } else if (values.type === "soup") {
            payload = {
              name: values.name,
              type: values.type,
              preparation_time: values.preparation_time,
              spiciness_scale: values.spiciness_scale,
            };
          }
          fetch("https://frosty-wood-6558.getsandbox.com/dishes", {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            credentials: "include",
            body: JSON.stringify(payload),
          })
            .then((res) => res.json())
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, dirty, handleReset }) => (
          <Form>
            <div className="input-field">
              <label>Name</label>
              <Field
                className="styled-input"
                placeholder="Name"
                type="text"
                name="name"
              />
              <ErrorMessage name="name" component="span" />
            </div>
            <div className="input-field">
              <label>Preparation time</label>
              <PreparationTimeData />
            </div>
            <div className="input-field">
              <label>Dish type</label>
              <Field className="styled-input" as="select" name="type">
                <option className="option" value="pizza">
                  Pizza
                </option>
                <option className="option" value="soup">
                  Soup
                </option>
                <option className="option" value="sandwich">
                  Sandwich
                </option>
              </Field>
            </div>
            <div className="input-field">
              <ConditionalDishData />
              <ErrorMessage name="diameter" component="span" />
              <ErrorMessage name="no_of_slices" component="span" />
              <ErrorMessage name="slices_of_bread" component="span" />
              <ErrorMessage name="spiciness_meter" component="span" />
            </div>

            <button
              type="button"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </StyledCustomForm>
  );
};

export default CustomForm;
