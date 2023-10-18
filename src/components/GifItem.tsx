import { FC } from "react"
import { Image } from "../types/image.types"

export const GifItem: FC<Image> = ( {title, url} ) => {

    return (
        <div className="card">
            <img src={ url } alt={ title }/>
            <p>{ title }</p>
        </div>
    )

}
