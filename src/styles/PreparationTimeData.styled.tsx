import styled from "styled-components";

export const StyledPreparationData = styled.div`
  display: flex;
  align-items: center;
  .duration-wrapper {
    width: 5px;
    display: flex;
    flex-direction: row;
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
    margin-left: 13px;
    margin-right: 13px;

    :valid,
    :focus {
      background-color: #392644;
    }
  }
`;
