# addRemoveUrlQuery

I practically wrote the following function to process the url parameters and get the final status as a string and redirect the page. Hopefully it benefits.

For example, when I click a button, I want the page value to be deleted and the category value to be added.

    let button = document.getElementById('changeCategory');
    button.addEventListener('click', function (e) {

        window.location = addRemoveUrlQuery({'category':'cars'}, ['page']);

    });

I think it was very useful!
