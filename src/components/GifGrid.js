import React from 'react';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=saitama&limit=10&api_key=3mS6QgbKP3edjoePuaiWZ33dP77PhEyN';
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        // console.log(data);
        console.log(gifs);
    };

    getGifs();

    return (
        <>
            <h3> { category } </h3>
            {/*<hr />*/}
        </>
    )
};

GifGrid.propTypes = {
    category : PropTypes.string.isRequired,
};
