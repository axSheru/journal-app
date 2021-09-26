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

    test('mutation: updateEntry', () => {
        
        const store = createVuexStore( journalState )

        const updatedEntry = {
            id: '-MjrZSR1hwEC8mfMROiA',
            date: 1631946119673,
            picture: "https://res.cloudinary.com/axsheru/image/upload/v1632117386/bchmkui2wgfjnqob7ahb.jpg",
            text: 'Hola mundo desde pruebas.'
        }

        store.commit( 'journal/updateEntry', updatedEntry )

        const storeEntries = store.state.journal.entries

        expect( storeEntries.length ).toBe( 2 )
        expect( storeEntries.find( e => e.id === updatedEntry.id ) ).toEqual(updatedEntry)

    })

    test('mutation: addEntry, delteEntry', () => {

        //addEntry
        
        const store = createVuexStore( journalState )

        const newEntry = { id: 'ABC-123', text: 'Hola mundo.' }

        store.commit( 'journal/addEntry', newEntry )

        const storeEntries = store.state.journal.entries

        expect( storeEntries.length ).toBe( 3 )
        expect( storeEntries.find( e => e.id === newEntry.id ) ).toEqual( newEntry )

    })
    
    
})