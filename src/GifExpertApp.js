import React, {useState} from 'react';
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

const GifExpertApp = ( {inputValue}) => {
    // const categories = ['Grimm', 'Fringe', 'The X-Files', 'Supernatural'];
    const [categories, setCategories] = useState(['Grimm', 'Fringe', 'The X-Files', 'Supernatural']);

    // const handleAdd = () => {
    //     setCategories([...categories, inputValue]);
    //     // setCategories(cats => [...cats, 'Dr. House1']);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <br />
            {/*<button onClick={ handleAdd }>Agregar</button>*/}
            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={ category } category={ category }/>
                    ))
                        // <li key={ category }>{ category }</li>
                }
            </ol>
        </>
    )
};

export default GifExpertApp;
