import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";


export class TVShowAPI{
   static async fetchPopulars(){
      const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)
     // console.log("ma reponse d'api est:", response.data.results);
      return response.data.results;
    }
    static async fetchRecommendation(tvShowId){
      const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`)
     //console.log("ma reponse d'api recommendation est:", response.data.results);
      return response.data.results;
    }

    static async fetchByTitle(title){
      const response = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`)
     //console.log("ma reponse d'api recommendation est:", response.data.results);
      return response.data.results;
    }
}