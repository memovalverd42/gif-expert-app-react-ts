import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas a componente <AddCategory/>', () => {

    const inputValue = 'Batman';

    test('debe de cambiar el valor de la caja de texto', () => {
        
        render(
            <AddCategory onNewCategory={ ( newCategory: string ) => {} }/>
        )
        
        const input = screen.getByRole<HTMLInputElement>('textbox');
        
        fireEvent.input( input, {target: { value: inputValue }} );
        
        expect( input.value ).toBe( inputValue );
        
    });
    
    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const onNewCategory = jest.fn();
        
        render(
            <AddCategory onNewCategory={ onNewCategory }/>
        );
        
        const input = screen.getByRole<HTMLInputElement>('textbox');
        const form  = screen.getByRole<HTMLFormElement>('form');
        
        fireEvent.input( input, {target: { value: inputValue }} );
        fireEvent.submit( form );
        
        expect( input.value ).toBe('');
        // screen.debug();
        
        // expect( onNewCategory ).toHaveBeenCalled();
        // expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
        
    });
    
    test('no debe de llamar onNewCategory() si el input es vacio', () => {
        
        const onNewCategory = jest.fn();
        const inputValue = 'B';
        
        render(
            <AddCategory onNewCategory={ onNewCategory }/>
        );
            
        const input = screen.getByRole<HTMLInputElement>('textbox');
        const form  = screen.getByRole<HTMLFormElement>('form');
        
        fireEvent.input( input, {target: { value: inputValue }} );
        fireEvent.submit( form );

        // expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
            
    });

});