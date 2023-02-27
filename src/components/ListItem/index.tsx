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



    return (
        <C.Container done={item.done}>
            

            <input
                type="checkbox"
                checked={item.done}
                onChange={e => onChange(item.id, e.target.checked)}
            />
            <label >{item.name}</label>
            <button onClick={handleRemove} >Remover</button>
   </C.Container>
    );
}