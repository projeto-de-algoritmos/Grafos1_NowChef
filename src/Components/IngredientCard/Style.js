import styled from 'styled-components';

export const IngredientCardButton = styled.div`
    background-color: ${props => props.chosen ? "#99154E" : "#FFC93C"};
    color: ${props => props.chosen ? "white" : "black"};
    padding: 5px;
    border-radius: 5px;
    width: 15vw;
    height: 30vh;
    margin: 5px 0px 10px 4vw;
    cursor: pointer;
    display: flex;
    justify-content: center;
`;