function addRemoveUrlQuery(addParams, removeParams, startQueryChar = '?'){

    addParams    = addParams || {};
    removeParams = removeParams || [];

    const urlParams = new URLSearchParams(window.location.search);

    //Add param
    for(const i in addParams){
        if(urlParams.has(i)){ urlParams.set(i, addParams[i]); }
        else                { urlParams.append(i, addParams[i]); }
    }

    //Remove param
    for(const i of removeParams){
        urlParams.delete(i);
    }

    if(urlParams.toString()){
        return startQueryChar + urlParams.toString();
    }

    return window.location.search;
}