import styled from 'styled-components';

export const RecipeCardButton = styled.div`
    background-color: rgb(225, 105, 49);
    padding: 5px;
    border-radius: 5px;
    width: 20vw;
    margin: 5px 0px 0px 4vw;
    &:hover{
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.05);
    }
`;

export const RecipeName = styled.p`
    color: white;
    padding: 5px;
    width: 100%;
    text-align: center;
`

export const LinkDiv = styled.a`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Image = styled.img`
    width: 20vw;
    height: 30vh;

`