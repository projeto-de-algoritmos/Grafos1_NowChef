import React, { useState, useEffect } from 'react';
import {
  BackgroundContainer,  HeaderDiv, HeaderTitle, SecondTitle, StyledForm, ConfirmButton,
  ButtonDiv
} from './Style';
import IngredientCard from './Components/IngredientCard';
import search from './Graph';

const Homepage = () => {

  const ingredients = ["Ovo", "CarneMoida", "Leite", "PimentaDoReino", "FarinhaDeRosca", 
  "Oleo", "FarinhaDeTrigo", "CheiroVerde", "Batata", "Bacalhau",
  "Amendoim", "Azeite", "PapricaDoce", "PapricaDefumada"];

  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  const [userIngredients, setUserIngredients] = useState([]);

  useEffect(() => {
    setUserIngredients(["Sal",])
  }, []);

  const addItem = (title) => {
    userIngredients.push(title);
  };

  const removeItem = (title) => {
    for(let i = 0; i < userIngredients.length; i++){
      if(userIngredients[i] === title){
        userIngredients[i] = userIngredients[userIngredients.length-1];
        userIngredients[userIngredients.length-1] = title;
        userIngredients.pop(); 
      }
    }
  };

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
            addItem={addItem}
            removeItem={removeItem}
          />
        ))
        }
      </StyledForm>
    <ButtonDiv>
      <ConfirmButton onClick={() => { setRecipes(search(userIngredients)) }}>
        Confirmar
      </ConfirmButton>
    </ButtonDiv>
    </BackgroundContainer>
  );
}

export default Homepage;