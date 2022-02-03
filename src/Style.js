import styled from 'styled-components';

export const BackgroundContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100%;
    flex-direction: column;
    background-color: #F6EEC9;
`;

export const HeaderDiv = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-content: center;
`;

export const HeaderTitle = styled.p`
    justify-content: center;
    display: flex;
    color: #A20A0A;
    font-size: 170%;
`;

export const SecondTitle = styled.p`
    margin: 30px;
`;

export const StyledForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0px 0px 10px 0px;
`;

export const IngredientCard = styled.div`
    background-color: #FFA36C;
    padding: 5px;
    border-radius: 5px;
    width: 20vw;
    margin: 5px 0px 0px 4vw;
`;

export const ButtonDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ConfirmButton = styled.div`
    width: 20%;
    height: 100%;
    margin: 10px;
    background-color: #799351;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
`;