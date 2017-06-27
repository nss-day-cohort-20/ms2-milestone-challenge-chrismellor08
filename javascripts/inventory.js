// Taking the old Slackish variable and updating it or createing a new one
var CarLot = (function(oldCarLot){

    // create an empty variable to store the array we will parse later
    let inventoryArray = null;

    // create an empty object to assign methods to
    // this is done so all the methods will not just be on Slackish later
    let inventory = Object.create(null);

    // iffe because we want the page to get the information on page load
    (function(){

        // creating, listening for, opening and sending ann XHR request
        var carList = new XMLHttpRequest();
        carList.addEventListener("load", setInventory;
        carList.open("GET", "inventory.json");
        carList.send();
    }())

    // update the initialMessagesArr with the contents of the JSON
    function setInventory(){
        inventoryArray = JSON.parse(event.target.responseText).cars;
        inventoryArray.forEach(function(message){CarLot.carCard(message.text)});
    }

    // create a method to call the initialMessagesArray
    initialMessage.getInitialMessages = function(){
        return initialMessagesArr
    }

    oldSlackish.initialMessage = initialMessage;

    return oldSlackish

}(Slackish || {} ))

