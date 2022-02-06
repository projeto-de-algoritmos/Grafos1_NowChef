import React from 'react';
import { RecipeCardButton, RecipeName, LinkDiv, Image } from './Style';

const RecipeCard = ({title}) => {
    const recipeContent = title;
    return (
        <div>
            <RecipeCardButton>
                <RecipeName>
                    {recipeContent.name}
                </RecipeName>
                <Image
                    src={recipeContent.imgRef}
                    alt="imagem da receita"    
                />
                <LinkDiv href={recipeContent.link}>
                    Acessar receita
                </LinkDiv>
            </RecipeCardButton>
        </div>
    );
};

export default RecipeCard;