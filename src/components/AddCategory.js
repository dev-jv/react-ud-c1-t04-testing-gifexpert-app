import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState(''); // '...'

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue( e.target.value ); // e.target.value is the value in the box!
    };

    const handleSubmit = e => { // to press enter!
        e.preventDefault();
        // console.log('Enter!');
        if(inputValue.trim().length > 2){
            setCategories(cats => [...cats, inputValue]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
};
