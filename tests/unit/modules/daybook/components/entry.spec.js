import { shallowMount } from '@vue/test-utils'
import Entry from '@/modules/daybook/components/Entry'
import { journalState } from '../../../mock-data/test-journal-state'

describe('Pruebas en el entry component.', () => {

    const mockRouter = {
        push: jest.fn()
    }

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount( Entry, {
            props: {
                entry: journalState.entries[0]
            },
            global: {
                mocks: {
                    $router: mockRouter
                }
            }
        })
    });

    test('Debe de hacer match con el snapshot.', () => {
        
        expect( wrapper.html() ).toMatchSnapshot()

    })
    
})
