import React, { useState } from 'react';

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('...');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue( e.target.value ); // e.target.value is the value in the box!
    };

    const handleSubmit = e => { // to press enter!
        e.preventDefault();
        console.log('Enter!')
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
