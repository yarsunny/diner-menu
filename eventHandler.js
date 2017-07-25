var eventHandler = (function () {
  //attach events to the menu-items
  document.querySelector('.menu-items').addEventListener('click', function(evt) {

    if ( evt.target.classList.contains('add-menu-item') ) {
        var itemId = event.target.getAttribute('data-id');
        callback.addItem(itemId);
    }

    if ( evt.target.classList.contains('remove-menu-item') ) {
        var itemId = event.target.getAttribute('data-id');
        callback.removeItem(itemId);
    }

  }, true); // Use Capturing
})()
