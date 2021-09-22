import { shallowMount } from '@vue/test-utils'
import Fab from '@/modules/daybook/components/Fab'

describe('Pruebas en el FAB component.', () => {
    
    test('Debe de mostrar el ícono por defecto.', () => {
        
        const wrapper = shallowMount( Fab )

        const iTag = wrapper.find('i')

        expect( iTag.classes('fa-plus') ).toBeTruthy()

    })
    

})
