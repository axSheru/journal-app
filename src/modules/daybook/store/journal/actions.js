import journalApi from '@/api/journalApi';

/* export const myAction = async ({ commit }) => {
    
} */

export const loadEntries = async ({ commit }) => {

    const { data } = await journalApi.get('/entries.json')
    const entries = []
    for( let id of Object.keys( data ) ) {
        entries.push({
            id,
            ...data[id]
        })
    }

    commit( 'setEntries', entries )

}

export const updateEntry = async ({ commit }, entry) => {
    
    const { text, date, picture } = entry
    let dataToSave = {text, date, picture}

    await journalApi.put(`/entries/${entry.id}.json`, dataToSave)
    commit( 'updateEntry', { ...entry } )

}

export const createEntry = async ({ commit }, entry) => {

    const { text, date, picture } = entry
    let dataToSave = { text, date, picture }

    const { data } = await journalApi.post(`/entries.json`, dataToSave)

    const { name } = data
    dataToSave.id = name

    commit( 'addEntry', { ...dataToSave } )

    return name
    
}