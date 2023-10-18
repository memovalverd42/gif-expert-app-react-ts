import { useEffect, useState } from "react";
import { Image } from "../types/image.types";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category: string ) => {

    const [images, setImages] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }


}
