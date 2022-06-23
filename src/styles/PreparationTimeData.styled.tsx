import styled from "styled-components";

export const StyledPreparationData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .duration-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .styled-input-tiny {
    background: linear-gradient(90deg, #5b115e, #e44d4d) center bottom/0% 2px
        no-repeat,
      linear-gradient(90deg, #f0acac, #e27ac0) left bottom/100% 2px no-repeat,
      linear-gradient(90deg, #eed7d7, #e9b5d8) left bottom/100% no-repeat;
    /* padding: 12px;
      width: 250px;
      
      outline: none; */
    padding: 10px;
    color: #392644;
    border-radius: 15px;
    border: none;
    width: 100%;

    :valid,
    :focus {
      background-color: #392644;
    }
  }
`;
