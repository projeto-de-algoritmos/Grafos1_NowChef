import styled from 'styled-components';

export const IngredientCardButton = styled.div`
    background-color: ${props => props.chosen ? "rgb(225, 105, 49)" : "#FFC93C"};
    color: ${props => props.chosen ? "white" : "black"};
    padding: 5px;
    border-radius: 5px;
    width: 20vw;
    margin: 3vh 1.5vh 0px 1.5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover{
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.05);
    }
`;

export const Image = styled.img`
    width: 19vw;
    height: 30vh;
`

export const Text = styled.p`
    text-align: center;
    margin: 1px;
`