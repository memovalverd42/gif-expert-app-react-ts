import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import { GifItem } from '../../src/components/GifItem';
import { Image } from "../../src/types/image.types";


describe('Tests del componente <GifItem/>', () => {

    const spiderman: Image = {
        id: '23423',
        title: 'Spiderman',
        url: 'asdfadsfasdf'
    }
    
    test('debe de hacer match con el snapshot', () => {

        const { container } = render(
            <GifItem { ...spiderman } />
        );
        
        expect( container ).toMatchSnapshot();
        
    });
    
    
    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        
        render(
            <GifItem { ...spiderman } />
        );
        
        const { src, alt } = screen.getByRole<HTMLImageElement>('img');
        // expect( src ).toBe( spiderman.url );
        expect( alt ).toBe( spiderman.title );
        
    });
    
    test('debe de mostrar el titulo en el componente', () => {
        
        render(
            <GifItem { ...spiderman }/>
        );
        
        expect( screen.getByText( spiderman.title ) ).toBeTruthy();

    });

});