import { shallowMount } from '@vue/test-utils'
import Fab from '@/modules/daybook/components/Fab'

describe('Pruebas en el FAB component.', () => {
    
    test('Debe de mostrar el ícono por defecto.', () => {
        
        const wrapper = shallowMount( Fab )

        const iTag = wrapper.find('i')

        expect( iTag.classes('fa-plus') ).toBeTruthy()

    })

    test('Debe de mostrar el ícono por argumento: fa-circle', () => {
        
        const wrapper = shallowMount( Fab, {
            props: {
                icon: 'fa-circle'
            }
        })        

        const iTag = wrapper.find('i')

        expect( iTag.classes('fa-circle') ).toBeTruthy()

    })
    

})
