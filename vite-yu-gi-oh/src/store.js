import{reactive} from 'vue'

export const store = reactive({
    searchText: "",
    loading: true,
    cardsList: [],
    apiUrl:'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=110&offset=0',
    archetypes: [],
    
});