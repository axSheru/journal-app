import uploadImage from '@/modules/daybook/helpers/uploadImage'
import axios from 'axios'

describe('Pruebas sobre el helper uploadImage', () => {

    test('Debe de cargar un archivo y retornar el URL.', async() => {
        
        const { data } = await axios.get('https://res.cloudinary.com/axsheru/image/upload/v1632117386/bchmkui2wgfjnqob7ahb.jpg', {
            responseType: 'arraybuffer'
        })

        const file = new File([ data ], 'foto.jpg')

        const url = await uploadImage( file )

        expect( typeof url ).toBe('string')

    })
    
})