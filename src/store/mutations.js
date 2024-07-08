export function setSearchedMeals(state,meals){
    state.searchedMeals=meals || []
}
export function setSearchedByLetters(state,meals){
    state.searchedByLetter=meals || []
}
export function setSearchedByIngradients(state,meals){
    state.searchedByIngradients=meals || []
}