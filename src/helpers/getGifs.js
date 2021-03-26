export const getGifs = async( category ) => {
    let gifs;
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=20&api_key=3mS6QgbKP3edjoePuaiWZ33dP77PhEyN`;
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
    // console.log(gifs);
    // setImages(gifs);
    // console.log(encodeURI(category));
    return gifs;
};
