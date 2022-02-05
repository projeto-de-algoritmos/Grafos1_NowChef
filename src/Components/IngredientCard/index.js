import React, { useState, useEffect } from 'react';
import { IngredientCardButton, Image, Text } from './Style';

const IngredientCard = ({
 title, addItem, removeItem
}) => {
  
  const [selected, setSelected] = useState(false);

  useEffect(() => {
  },[selected])

  return (
    <div>
      { selected
        ? (
          <IngredientCardButton
            onClick={() => { setSelected(!selected); removeItem(title[0]); }}
            chosen
          >
            <Image
              src={title[1]}
              alt="imagem do ingrediente"    
            />
            <Text>
              {title[0]}
            </Text>
          </IngredientCardButton>
        ) : (
          <IngredientCardButton 
            onClick={() => { setSelected(!selected); addItem(title[0]); }}
          >
            <Image
              src={title[1]}
              alt="imagem do ingrediente"    
            />
            <Text>
              {title[0]}
            </Text>
          </IngredientCardButton>
        )
        }
    </div>
  );
};

export default IngredientCard;