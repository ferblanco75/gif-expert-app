import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState( "hola mundo" );
    //usa un fragment si no voy a agregar ninguna clase

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('submit hecho');
        //con la validacion del length del trim limito a que agregue solo cuando el texto tiene 2 caracteres o mas
        if ( inputValue.trim().length > 2) {
            setCategories(cats => [...cats, inputValue])
            setInputValue('');
        }  
    }

    return (
        <form onSubmit={ handleSubmit }>
           <input
                //este texto tiene que tener un estado
                type="text"
                value = { inputValue } //si yo escribo en el input no me va a dejar escribir
                //para manejar el cambio tengo que armar un onchange
                onChange ={ handleInputChange }
           />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,    
}


