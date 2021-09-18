/* export const myMutation = ( state ) => {
    
} */

export const setEntries = ( state, entries ) => {
    
    state.entries = [ ...state.entries, ...entries ]
    state.isLoading = false

}

export const updateEntry = ( state, entry ) => {

    const idx = state.entries.map( e => e.id ).indexOf( entry.id )
    state.entries[idx] = entry
    
}

export const addEntry = ( state, entry ) => {

    //state.entries = [ entry, ...state.entries ]//Solución profe. Se recomienda utilizar el operador spread (...) para romper relación con el objeto original.
    state.entries.unshift( entry )//Mi solución.

    return entry.id
}