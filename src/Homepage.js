import React from 'react';
import {
  BackgroundContainer,  HeaderDiv, HeaderTitle, SecondTitle, StyledForm, ConfirmButton,
  ButtonDiv
} from './Style';
import IngredientCard from './Components/IngredientCard';
import createGraph from './Graph';

const Homepage = () => {

  const ingredients = ["Ovo", "CarneMoida", "Leite", "PimentaDoReino", "FarinhaDeRosca", 
  "Oleo", "FarinhaDeTrigo", "CheiroVerde", "Batata", "Bacalhau",
  "Amendoim", "Azeite", "PapricaDoce", "PapricaDefumada"];

  const graph = createGraph();

  console.log(graph);

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
            key={Math.random()}
            title={type}
          />
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