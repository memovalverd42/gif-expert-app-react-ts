import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState, FC } from 'react';

interface AddCategoryProps {
    setCategories: (categories: string[]) => void;
    categories: string[]
}

interface newCategoryProp {
    onNewCategory: ( newCategory: string ) => void
}

// export const AddCategory: FC<AddCategoryProps> = ( { setCategories, categories } ) => {
export const AddCategory: FC<newCategoryProp> = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( { target }: ChangeEvent<HTMLInputElement> ) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        const trimedInputValue = inputValue.trim();

        if( trimedInputValue.length <= 1 ) return;

        // setCategories( [ inputValue, ...categories ] );
        onNewCategory(trimedInputValue.trim());
        setInputValue('');
    }

    return (
        <form 
            onSubmit={ onSubmit }
            aria-label='form'
        >
            <input 
                type="text" 
                placeholder="Buscar GIF"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}
