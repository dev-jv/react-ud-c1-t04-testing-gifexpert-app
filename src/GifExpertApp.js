import React, {useState} from 'react';

const GifExpertApp = () => {
    // const categories = ['Grimm', 'Fringe', 'The X-Files', 'Supernatural'];
    const [categories, setCategories] = useState(['Grimm', 'Fringe', 'The X-Files', 'Supernatural']);

    const handleAdd = () => {
        setCategories([...categories, 'Dr. House']);
    };

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={ handleAdd }>Agregar</button>

            <ol>
                {
                    categories.map(category => {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>
        </>
    )
};

export default GifExpertApp;
