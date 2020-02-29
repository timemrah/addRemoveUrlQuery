function addRemoveUrlQuery(addParam = {}, removeParam = [], startQueryChar = '?'){

    let urlParams = new URLSearchParams(window.location.search);

    //Add param
    for(let i in addParam){
        if(urlParams.has(i)){ urlParams.set(i, addParam[i]); }
        else                { urlParams.append(i, addParam[i]); }
    }

    //Remove param
    for(let i of removeParam){
        if(urlParams.has(i)){
            urlParams.delete(i);
        }
    }

    if(urlParams.toString()){
        return startQueryChar + urlParams.toString();
    }

    return '';
}