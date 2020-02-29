# addRemoveUrlQuery

I practically wrote the following function to process the url parameters and get the final status as a url query string.

For example, when I click a button, I want the category value to be added and number of page value to be deleted from url query.

    let button = document.getElementById('changeCategory');
    button.addEventListener('click', function (e) {

        window.location = addRemoveUrlQuery({'category':'cars'}, ['page_num']);

    });

I think it was very useful!
