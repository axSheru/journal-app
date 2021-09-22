import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home'

describe('Pruebas en el Home view.', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount( Home )
    });

    test('Debe de hacer match con el snapshot.', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })

})