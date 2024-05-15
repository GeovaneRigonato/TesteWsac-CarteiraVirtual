import React from 'react';
import './Input.css';
interface InputProps {
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function Input(props : InputProps) {
    return (
        <input
            type="text"
            placeholder={props.placeholder || ''}
            className="input"
            value={props.value} // Propriedade value para definir o valor do input
            onChange={props.onChange} // Propriedade onChange para lidar com mudanças no input
        />
    );
}

export default Input;
