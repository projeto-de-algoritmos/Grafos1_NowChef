import styled from 'styled-components';

export const BackgroundContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background-color: #eeeeee;
`;

export const HeaderDiv = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-content: center;
`;

export const FirstTitle = styled.p`
    margin: 4vh 0 0 0;
    text-align: center;
    font-size: 26px;
`;

export const SecondTitle = styled.p`
    margin: 4vh 0 2vh 0;
    text-align: center;
    font-size: 20px;
`;

export const StyledForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0px 0px 10px 0px;
    justify-content: center;
`;

export const ButtonDiv = styled.div`
    width: 100%;
    display: flex;
    height:100%;
    justify-content: center;
    align-items: flex-end;
`;

export const ConfirmButton = styled.div`
    width: 20%;
    height: 5vh;
    margin: 10px 0 10px 0;
    background-color: #799351;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover{
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.05);
    }
`;

export const NotFoundText = styled.p`
    text-align: center;
    color: red;
    width: 100%;
    margin: 50px 0 50px 0;
`;