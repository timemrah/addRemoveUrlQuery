function addRemoveUrlQuery(addParam = {}, removeParam = [], startQueryChar = '?') {

    const urlParams = new URLSearchParams(window.location.search);

    addParam = addParam || {}

    // Add param
    for (const i in addParam) {
        if (urlParams.has(i)) {
            urlParams.set(i, addParam[i]);
        }
        else {
            urlParams.append(i, addParam[i]);
        }
    }

    removeParam = removeParam || []

    // Remove param
    for (const i of removeParam) {
        urlParams.delete(i);
    }

    if (urlParams.toString()) {
        return startQueryChar + urlParams.toString();
    }

    return window.location.search;
}
