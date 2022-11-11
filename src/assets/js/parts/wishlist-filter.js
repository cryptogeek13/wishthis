$(function () {

    /**
     * Filter wishes
     */
    $('.ui.dropdown.filter.priority')
    .dropdown({
        match          : 'text',
        fullTextSearch : true,
        onChange       : function() {
            $(this).addClass('disabled loading');

            var wishlist_id;
            var wistlist_cards_data = $('.wishlist-cards').attr('data-wishlist')
            var dropdown_wishlists  = $('.dropdown.wishlists');

            if (dropdown_wishlists.length) {
                wishlist_id = $('.dropdown.wishlists').dropdown('get value');
            }

            if (typeof wistlist_cards_data !== 'undefined') {
                wishlist_id = wistlist_cards_data;
            }

            if (!Number.isInteger(parseInt(wishlist_id))) {
                $(this).removeClass('disabled loading');

                return false;
            }

            const parameter = new URLSearchParams(
                {
                    'api_token' : api.token,
                    'module'    : 'wishlists',
                    'page'      : 'api',

                    'priority' : $(this).dropdown('get value'),
                    'wishlist' : wishlist_id,
                }
            );

            fetch('/?' + parameter, {
                method : 'GET',
            })
            .then(handleFetchError)
            .then(handleFetchResponse)
            .then(function(response) {
                var html = response.results ? response.results : '';

                $('.wishlist-cards').html(html);
            })
            .finally(() => {
                $(this).removeClass('disabled loading');
            });
        }
    });

});
