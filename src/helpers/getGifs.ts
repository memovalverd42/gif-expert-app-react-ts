import { GIF } from "../types/gif.types";
import { Image } from "../types/image.types";

export const getGifs = async( category: string ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&q=${ category }&limit=10`;
    const resp = await fetch( url );

    const { data }: GIF = await resp.json();

    const gifs: Image[] = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;

}