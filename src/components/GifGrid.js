import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const [count, setCount] = useState(0);

    useEffect( () => {
        getGifs(); // ...just will run first time
    }, []);

    const getGifs = async() => {
        let gifs;
        const url = 'https://api.giphy.com/v1/gifs/search?q=saitama&limit=10&api_key=3mS6QgbKP3edjoePuaiWZ33dP77PhEyN';
        const resp = await fetch(url);
        const {data} = await resp.json();

        gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
        // console.log(data);
        console.log(gifs);
    };

    // getGifs();

    return (
        <>
            <h3>{ category }</h3>
            <h3>{ count }</h3>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </>
    )
};

GifGrid.propTypes = {
    category : PropTypes.string.isRequired,
};
