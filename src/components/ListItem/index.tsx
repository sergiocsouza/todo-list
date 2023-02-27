import * as C from './styles';
import { Item } from '../../types/item';
import { useState } from 'react';

type Props = {
  item: Item,
  onChange: (id: number, done: boolean) => void,
  onRemove: (id: number, done: boolean) => void;
}

export const ListItem = ({ item, onChange, onRemove }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const handleRemove = () => {
    onRemove(item.id, isChecked);
  }

  const inputId = `item-${item.id}`; // gera um id único para o input

  return (
    <C.Container done={item.done}>
      
        <input
          id={inputId} // define o id do input
          type="checkbox"
          checked={item.done}
          onChange={e => onChange(item.id, e.target.checked)}
        />
        <label htmlFor={inputId}>{item.name}</label>
   
      <button onClick={handleRemove}>Remover</button>
    </C.Container>
  );
}
