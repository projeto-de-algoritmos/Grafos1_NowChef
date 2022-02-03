import React, { useState, useEffect } from 'react';
import { IngredientCardButton } from './Style';

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
            onClick={() => { setSelected(!selected); removeItem(title); }}
            chosen
          >
            {title}
          </IngredientCardButton>
        ) : (
          <IngredientCardButton 
            onClick={() => { setSelected(!selected); addItem(title); }}
          >
            {title}
          </IngredientCardButton>
        )
        }
    </div>
  );
};

export default IngredientCard;