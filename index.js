import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
     databaseURL: "https://playground-10289-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppinglistInDB = ref(database, "shoppingList")


const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")


addButtonEl.addEventListener("click", function() {

    let inputValue = inputFieldEl.value

    // if (inputValue == "") {
    //     alert('null cannot be added to cart')
    // }
    for (let i = 0; i < shoppingListEl.length; i++) {
        if (inputValue == shoppingListEl[i]) {
            alert('Item is already in cart')
        }
        else {

            push(shoppinglistInDB, inputValue)

            clearInputFieldEl()
        }
    }
    
})

onValue(shoppinglistInDB, function(snapshot) {

    if (snapshot.exists()) {
        let shoppingListArray = Object.entries(snapshot.val())


        clearShoppingListEl()

        for (let i = 0; i < shoppingListArray.length; i++) {

            let currentItem = shoppingListArray[i]

            let currentItemID = currentItem[0]

            let currentItemValue = currentItem[1]

          
            appendItemToshoppingListEl(currentItem)
 
        }
    } else {
        shoppingListEl.innerHTML = "No items here yet"
    }
})

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToshoppingListEl(item) {

    let itemID = item[0]
    
    let itemValue = item[1]
   

    let newEl = document.createElement("li")

    newEl.textContent = itemValue

    newEl.addEventListener("click", function() {

        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)

        remove(exactLocationOfItemInDB)
    })

    shoppingListEl.append(newEl)
}

