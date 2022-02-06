import React, { useState, useEffect } from 'react';
import {
  BackgroundContainer,  HeaderDiv, SecondTitle, StyledForm, ConfirmButton,
  ButtonDiv, NotFoundText, FirstTitle,
} from './Style';
import IngredientCard from './Components/IngredientCard';
import RecipeCard from './Components/RecipeCard';
import search from './Graph';
import Banner from '../src/Banner/banner-receitas.png';

const Homepage = () => {

  const ingredients = [
    ["Amendoim", "https://emporioquatroestrelas.vteximg.com.br/arquivos/ids/156643-1000-1000/Amendoim-HPS-Com-Casca-Cru-500g.png?v=636908764350000000"],
    ["Azeite", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmth72PSMPFN2qL_fsc4yXT-ONA58x1BTsZw&usqp=CAU"],
    ["Bacalhau", "https://www.proteste.org.br/-/media/proteste/images/home/alimentacao/carnes/bacalhau_2018/bacalhau04.jpg?la=pt-br&rev=c9886641-1804-4fc1-95c6-d15f401dfd0b&hash=C29A9BA5FF3F9B1E43A66858A9106987&mw=960"],
    ["Batata", "http://conteudo.imguol.com.br/c/entretenimento/0e/2017/10/15/batata-crua-1508077604971_v2_1920x1269.jpg"], 
    ["Cheiro-Verde", "https://assets.betalabs.net/production/alvoradaviva/item-images/d9a4c1378a2871b9da815740ae57d8c5.jpg"],
    ["Carne Moida", "https://dourados.saofranciscoonline.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/carne-moida-bovina-2-resfriada-kg-0000000095273.jpg"],
    ["Farinha de Rosca", "https://img.itdg.com.br/tdg/images/blog/uploads/2017/09/shutterstock_170955137-300x200.jpg"],
    ["Farinha de Trigo", "https://img.itdg.com.br/tdg/images/blog/uploads/2018/10/tipos-de-farinha-de-trigo-veja.jpg"],
    ["Leite", "https://tecnologianocampo.com.br/wp-content/uploads/2018/07/Leite2.jpg"], 
    ["Óleo", "https://blog.novasafra.com.br/wp-content/uploads/2015/11/Aprenda-como-usar-oleos-de-forma-correta-na-culinaria-780x450.jpg"],
    ["Ovo", "https://i.em.com.br/r7z8l-RBFOg3F5QzYW0SLM8jPy8=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2020/08/30/1180223/20200827231603358874a.jpg"],
    ["Páprica Defumada", "https://a-static.mlcdn.com.br/1500x1500/paprica-defumada-granel-100g-sabor-em-graos/saboremgraos/989p/06f6aed525890fc712ee99c223a70627.jpg"],
    ["Páprica Doce", "https://images.armazemcerealista.com.br/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/p/_/p_prica-doce---50g.jpg"],
    ["Pimenta-do-Reino", "http://premiertemperos.com.br/novo/wp-content/uploads/2020/04/1706-1-1200x675.jpg"],
  ];

  const [recipeState, setRecipeState] = useState(false);
  const [recipes, setRecipes] = useState([]);

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

  useEffect(() => {
  },[recipeState, recipes])

  const showResult = (recipes) => {
    if(recipes.length > 0){
      return (
        recipes.map((type) => (
          <RecipeCard
            key={Math.random()}
            title={type}
          />
        ))
      )
    } else {
      return (
        <NotFoundText>
          Não achamos nenhuma receita somente com esses ingredientes. =(
        </NotFoundText>
      )
    }
  }

  return (
    <BackgroundContainer>    
      <HeaderDiv>
        <img
          src={Banner}
          alt="banner do site"
          style={{
            width: '100%',
            height: '100%'

          }}
        />
      </HeaderDiv>
      { recipeState 
      ? <SecondTitle>
          As receitas possíveis são:
        </SecondTitle>
      : <div>
          <FirstTitle>
            Olá, seja bem-vindo ao NowChef!
          </FirstTitle>
          <SecondTitle>
            Para saber quais receitas são possíveis fazer com os ingredientes que possui em casa basta selecionar os ingredientes e clicar no botão "confirmar" ao final da página. =)
          </SecondTitle>
        </div>
      }
      <StyledForm>
      { recipeState
        ? showResult(recipes)
        : ingredients.map((type) => (
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
    { recipeState
      ? <ConfirmButton onClick={() => { setRecipeState(false); setUserIngredients(["Sal",])}}>
          Voltar
        </ConfirmButton>
      : <ConfirmButton onClick={() => { setRecipes(search(userIngredients)); setRecipeState(true); }}>
          Confirmar
        </ConfirmButton>
      }
    </ButtonDiv>
    </BackgroundContainer>
  );
}

export default Homepage;