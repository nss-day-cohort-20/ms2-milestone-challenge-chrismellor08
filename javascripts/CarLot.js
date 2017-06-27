var CarLot = (function (globalScopeCarLot) {
  let _car_inventory = [];
  inventory = Object.create(null);

  inventory.loadInventory = function (callback) {
    var load = new XMLHttpRequest();
    load.addEventListener("load", function () {
      _car_inventory = JSON.parse(event.target.responseText).cars;
      // console.log(_car_inventory);
      callback(_car_inventory);
    });
    load.open("get", "inventory.json");
    load.send();
    // console.log("hey")
  }

  inventory.getInventory = function(){
    return _car_inventory;
  }

  globalScopeCarLot.Inventory = inventory;
  return globalScopeCarLot;

})(CarLot || {});