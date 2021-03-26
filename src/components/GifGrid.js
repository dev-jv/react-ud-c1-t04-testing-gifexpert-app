import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {GifGridItem} from '../components/GifGridItem';
import {getGifs} from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    // const [count, setCount] = useState(0);

    const [images, setImages] = useState([]);

    // useEffect( () => {
    //     getGifs(); // ...just will run first time
    // }, []);

    useEffect( () => {
        getGifs( category )
            .then( imgs => setImages(imgs) )
    }, [ category ] );

    // const getGifs = async() => {
    //     let gifs;
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=20&api_key=3mS6QgbKP3edjoePuaiWZ33dP77PhEyN`;
    //     const resp = await fetch(url);
    //     const {data} = await resp.json();
    //
    //     gifs = data.map(img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     });
    //     // console.log(data);
    //     console.log(gifs);
    //     setImages(gifs);
    //     console.log(encodeURI(category));
    // };

    // getGifs();

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    images.map(img =>
                        // <ol key={img.id}>{img.title}</ol>
                        // <GifGridItem key={ img.id } img={ img }/>
                        <GifGridItem key={ img.id } { ...img }/>
                    )
                }
            </div>
        </>
    )
};

GifGrid.propTypes = {
    category : PropTypes.string.isRequired,
};
