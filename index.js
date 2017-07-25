var main = (function () {

  function stringToNode(_string) {
      var template = document.createElement('template');
      template.innerHTML = _string;
      return template.content.firstChild;
  }

  function renderItem (item) {
    return stringToNode(
      '<div>' +
        '<div class="item-name">'+ item.name +'</div>' +
        '<button type="button" class="add-menu-item" data-id="'+ item.id +'">add</button>' +
        '<button type="button" class="remove-menu-item" data-id="'+ item.id +'">remove</button>' +
      '</div>'
    )
  }

  function clearItems () {
    dom.menuItems().innerHTML = '';
  }

  return {
    render: function () {
      clearItems();

      data.menuItems.map(function (item) {
        dom.menuItems().appendChild(renderItem(item));
      })
    }
  }
})();

main.render();
