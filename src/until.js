import axios from 'axios';
export const setApi=(url)=>{
    return new Promise((resolve,reject)=>{
        axios.get(url).then((response)=>{
            resolve(response)
        })
    })
}

