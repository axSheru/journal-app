import { createStore } from 'vuex'
import journal from '@/modules/daybook/store/journal'
import { journalState } from '../../../../mock-data/test-journal-state'

const createVuexStore = ( initialState ) =>
    createStore({
        modules: {
            journal: {
                ...journal,
                state: { ...initialState }//Se hace de esta forma para poder establecer un estado inicial personalizado.
            }
        }
    })

describe('Vuex - Pruebas en el Journal Module', () => {

    //Básicas.
    test('Este es el estado inicial; Debe de tener el siguiente state.', () => {

        const store = createVuexStore( journalState )
        const { isLoading, entries } = store.state.journal

        expect( isLoading ).toBeFalsy()
        expect( entries ).toEqual( journalState.entries )
        
    })

    //Mutations.
    test('mutation: setEntries', () => {
        
        const store = createVuexStore({ isLoading: true, entries: [] })

        store.commit( 'journal/setEntries', journalState.entries )
        expect( store.state.journal.entries.length ).toBe( 2 )
        
        store.commit( 'journal/setEntries', journalState.entries )
        expect( store.state.journal.entries.length ).toBe( 4 )

        expect( store.state.journal.isLoading ).toBeFalsy()

    })
    
    
})