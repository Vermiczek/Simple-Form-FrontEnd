import styled from "styled-components";

export const StyledCustomForm = styled.div`
  display: flex;
  align-items: center;
  margin: 100px;
  padding: 40px;
  border-radius: 30px;
  width: 400px;
  left: 50%;
  background-color: #9897ff;
  flex-direction: column;
  text-align: center;
  color: white;
  -webkit-font-smoothing: none;
  -webkit-box-shadow: 0 12px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 12px 6px -6px #0000007a;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  size: 17px;
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  /* CSS */
  button {
    background-color: #ea4c89;
    border-radius: 20px;
    border-style: none;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;

    font-size: 14px;
    font-weight: 500;
    height: 40px;
    line-height: 20px;
    margin: 30px;
    list-style: none;
    width: 100px;
    outline: none;
    padding: 10px 16px;
    text-align: center;
    text-decoration: none;
    transition: color 100ms;
    vertical-align: baseline;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  button:hover,
  button:focus {
    background-color: #f082ac;
  }

  .option {
    border-radius: 10px;
  }
  .input-field {
    font-size: 20px;
    padding-top: 20px;
    margin-bottom: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    .styled-input {
      background: linear-gradient(90deg, #5b115e, #e44d4d) center bottom/0% 2px
          no-repeat,
        linear-gradient(90deg, #f0acac, #e27ac0) left bottom/100% 2px no-repeat,
        linear-gradient(90deg, #eed7d7, #e9b5d8) left bottom/100% no-repeat;
      /* padding: 12px;
      width: 250px;
      outline: none; */
      color: #392644;
      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      padding: 10px;
      border-radius: 15px;
      border: none;
      margin: 5px;
      /* font-size: 15px;
      transition: background-size 0.5s ease; */
    }

    display: flex;
    flex-direction: column;
    margin: 20px;
  }
`;
