import React from "react";
import { render, screen } from "@testing-library/react";
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { Image } from '../../src/types/image.types';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas de componente <GifGrid/>', () => {
    
    const category = 'Batman';

    test('debe de mostrar el loading inicialmente', () => {
        
        (useFetchGifs as jest.Mock).mockReturnValue({
            images: [] as Image[],
            isLoading: true
        });
        
        render(<GifGrid category={category}/>);
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category) );
        
    });
    
    test('debe de mostrar items cuando se cargan las imagenes', () => {
        
        const gifs: Image[] = [
            {
                id: 'ABC',
                title: 'Cualquier cosa',
                url: 'https://localhost/cualquier/cosa.jpg'
            },
            {
                id: '123',
                title: 'Cualquier cosa',
                url: 'https://localhost/cualquier/cosa.jpg'
            },
        ];

        (useFetchGifs as jest.Mock).mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/>);

        expect( screen.getAllByRole('img').length ).toBe( 2 );

    });

});