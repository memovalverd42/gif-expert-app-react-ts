import { getGifs } from '../../src/helpers/getGifs';


describe('Pruebas de getGifs()', () => {
    
    test('debe de retornar un arreglo de gifs', async() => {
        
        const gifs = await getGifs('Batman');
        
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            title: expect.any( String ),
            url: expect.any( String ),
            id: expect.any( String )
        })

    });

});