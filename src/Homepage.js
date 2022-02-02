import React from 'react';
import {
  BackgroundContainer,  HeaderDiv, HeaderTitle, SecondTitle, StyledForm, ConfirmButton,
  ButtonDiv, IngredientCard
} from './Style';

const Homepage = () => {

  const ingredients = ["Ovo", "CarneMoida", "Leite", "PimentaDoReino", "FarinhaDeRosca", 
  "Oleo", "FarinhaDeTrigo", "CheiroVerde", "Batata", "Bacalhau",
  "Amendoim", "Azeite", "PapricaDoce", "PapricaDefumada"];

  return (
    <BackgroundContainer>    
      <HeaderDiv>
        <HeaderTitle>
          Now Chef!
        </HeaderTitle>
      </HeaderDiv>
        <SecondTitle>
          Selecione os ingredientes que você possui em casa:
        </SecondTitle>
      <StyledForm>
        { ingredients.map((type) => (
          <IngredientCard
          key={type}
          >
            {type}
          </IngredientCard>
        ))
        }
      </StyledForm>
    <ButtonDiv>
      <ConfirmButton onClick={() => { console.log('clicou') }}>
        Confirmar
      </ConfirmButton>
    </ButtonDiv>
    </BackgroundContainer>
  );
}

export default Homepage;