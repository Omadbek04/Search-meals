import axiosClient from "../axiosClient";

//by name
export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}
//by letter
export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setSearchedByLetters", data.meals);
  });
}

//by ingradients
export function searchMealsByIngradients({ commit }, ing) {
  axiosClient.get(`filter.php?i==${ing}`).then(({ data }) => {
    commit("setSearchedByIngradients", data.meals);
  });
}
