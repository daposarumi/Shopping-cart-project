import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


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

    push(shoppinglistInDB, inputValue)

    clearInputFieldEl()
    
})

onValue(shoppinglistInDB, function(snapshot) {
    let shoppingListArray = Object.entries(snapshot.val())

    clearShoppingListEl()

    for (let i = 0; i < shoppingListArray.length; i++) {

        let currentItem = shoppingListArray[i]

        let currentItemID = Object.keys(snapshot(val))

        let currentItemValue = Object.value(snapshot(val))

        appendItemToshoppingListEl(currentItemID)
    }
})

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToshoppingListEl(itemValue) {
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}

