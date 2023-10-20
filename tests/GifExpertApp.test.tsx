import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en componente <GifExpertApp/>', () => {
    
    test('no debe de agregar la categoria en caso de que ya exista ', () => {
        
        render( <GifExpertApp/> );
        
        const input = screen.getByRole<HTMLInputElement>('textbox');
        const form  = screen.getByRole<HTMLFormElement>('form');
        
        fireEvent.input( input, {target: { value: 'Batman' }} );
        fireEvent.submit( form );

        screen.debug();

        expect( screen.getAllByText('Batman').length ).toBeLessThan(2);

    });

});