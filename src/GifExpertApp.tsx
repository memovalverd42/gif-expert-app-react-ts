import { useState } from "react"
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const onAddCategory = ( newCategory: string ) => {

        // TODO: Mejorar la validación
        if( categories.includes(newCategory) ) return;

        setCategories( [newCategory, ...categories] );
        // setCategories( cat => [... categories, 'Superman'] )

    }
    
    const [categories, setCategories] = useState<string[]>( ['Batman'] );

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={ setCategories } categories={ categories }
                onNewCategory={ onAddCategory }
            />

            {
                categories.map( ( cat ) => (
                    <GifGrid key={ cat } category={ cat }/>
                ))
            }

        </>
    )
}
