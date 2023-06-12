import axios from "axios";

 export default axios.create({

    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'610f037a0cac41389c4736496ac3c5f2',

    },
    
})