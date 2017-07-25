var callback = (function () {
  return {
    addItem: function (itemId) {
      data.menuItems = data.menuItems.map(function (item) {
        if (item.id == itemId) {
          return Object.assign({}, item, {
            currentCount: item.currentCount + 1
          });
        }
        return item;
      })

      main.render();
    },
    removeItem: function (itemId) {
      data.menuItems = data.menuItems.map(function (item) {
        if (item.id == itemId) {
          return Object.assign({}, item, {
            currentCount: item.currentCount - 1
          });
        }
        return item;
      })

      main.render();
    }
  }
})();
