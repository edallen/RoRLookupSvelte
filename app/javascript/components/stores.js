import { writable } from 'svelte/store';

export const institutionList = writable([]);
export const isFetching = writable(false);

function fixedEncodeURIComponent(str) {
    // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
   return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
     return '%' + c.charCodeAt(0).toString(16).toUpperCase();
   });
 }

 export function fetchInstitutions(institutionEntered){
    isFetching.set(true);
    const rorApiUrl = "https://api.ror.org/organizations?query=";
    let requestUrl = rorApiUrl + fixedEncodeURIComponent(institutionEntered);
    //console.log(requestUrl);
    let fetchRes = fetch(requestUrl);
    fetchRes.then( res => res.json()).then( data => {
        console.dir(data);
        institutionList.set(data);
        isFetching.set(false);
    })
   
  }