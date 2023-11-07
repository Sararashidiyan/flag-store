import {defineStore} from 'pinia'
import { remove } from "lodash";

  
export const useFavoriteFlagStore = defineStore('favoriteFlag', {
state:()=>{
  return {
    selectedFavoriteCountries:[],
    bordersCountry: [],
    borderCodes: []
  }
},
actions:{
  isInFav(country){
    return this.selectedFavoriteCountries.some((selectedCountry) => {
      return selectedCountry.cca2 === country.cca2;
    });
  },
  removeFromFav(country) {
    remove(this.selectedFavoriteCountries, (selectedCountry) => {
      return selectedCountry.cca2 === country.cca2;
    });
    remove(this.borderCodes, (borderCode) => {
      return borderCode === country.borders;
    });
  },
  addToFav(country) {
    if (!this.isInFav(country)) {
      this.selectedFavoriteCountries.push(country);
      this.borderCodes.push(country.borders);
    }
  },

},
getters: {
  fetchBorders(state) {
    if (!!state.borderCodes) {
      const borderCodes = state.borderCodes.flat().join(",");
      const { data: response } = useFetch(
        `https://restcountries.com/v3.1/alpha?codes=${borderCodes}`
      );
      this.bordersCountry = response;
    }
    return this.bordersCountry;
  },
},
});
