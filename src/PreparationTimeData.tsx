import { useFormikContext } from "formik";
import { useEffect, useState } from "react";
import { StyledPreparationData } from "./styles/PreparationTimeData.styled";

//components responsible for taking in the preparation time data as an input and making sure it's valid
//each of the input fields has similiar methods which check whether the
//data they take in is valid.
export const PreparationTimeData = () => {
  const { values } = useFormikContext<any>();
  const [timeValues, setTimeValues] = useState<any>({
    seconds: "00",
    minutes: "00",
    hours: "00",
  });
  useEffect(() => {
    values.preparation_time =
      timeValues.hours + ":" + timeValues.minutes + ":" + timeValues.seconds;
  }, [timeValues, values]);
  useEffect(() => {
    console.log(values.preparation_time);
  }, [values.preparation_time]);
  return (
    <StyledPreparationData>
      <div className="duration-wrapper">
        <input
          className="styled-input-tiny"
          type="number"
          data-testid="input-hour"
          min="0"
          max="99"
          maxLength={1}
          value={timeValues.hours}
          onChange={(e) => {
            if (e.target.value.length < 3) {
              e.target.value = "0" + e.target.value;
            }
            if (e.target.value.length > 2) {
              e.target.value =
                e.target.value.charAt(1) + e.target.value.charAt(2);
            }
            if (Number(e.target.value) > 99) {
              e.target.value = "99";
            }
            if (Number(e.target.value) < 0) {
              e.target.value = "0";
            }
            setTimeValues({
              hours: e.target.value,
              minutes: timeValues.minutes,
              seconds: timeValues.seconds,
            });
          }}
        />
        <div>:</div>
        <input
          type="number"
          min="0"
          max="59"
          data-testid="input-minute"
          className="styled-input-tiny"
          value={timeValues.minutes}
          onChange={(e) => {
            if (e.target.value.length < 3) {
              e.target.value = "0" + e.target.value;
            }
            if (e.target.value.length > 2) {
              e.target.value =
                e.target.value.charAt(1) + e.target.value.charAt(2);
            }
            if (Number(e.target.value) > 59) {
              e.target.value = "59";
            }
            if (Number(e.target.value) < 0) {
              e.target.value = "0";
            }
            setTimeValues({
              hours: timeValues.hours,
              minutes: e.target.value,
              seconds: timeValues.seconds,
            });
          }}
        />
        <div>:</div>
        <input
          type="number"
          min="0"
          max="59"
          data-testid="input-second"
          className="styled-input-tiny"
          value={timeValues.seconds}
          onChange={(e) => {
            if (e.target.value.length < 3) {
              e.target.value = "0" + e.target.value;
            }
            if (e.target.value.length > 2) {
              e.target.value =
                e.target.value.charAt(1) + e.target.value.charAt(2);
            }
            if (Number(e.target.value) > 59) {
              e.target.value = "59";
            }
            if (Number(e.target.value) < 0) {
              e.target.value = "0";
            }
            setTimeValues({
              hours: timeValues.hours,
              minutes: timeValues.minutes,
              seconds: e.target.value,
            });
          }}
        />
      </div>
    </StyledPreparationData>
  );
};
