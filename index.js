import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { clearInputValue, appendtoShoppingList } from "./functions"

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

    clearInputValue()
    
    push(shoppinglistInDB, inputValue)


    appendtoShoppingList(inputValue) 
    
})

// onValue(shoppinglistInDB, function(snapshot) {
//     let listArray = Object.values(snapshot.val())

//     for (let i = 0; i < listArray.length; i++) {
       
//         appendtoShoppingList(listArray[i])
//     }
// })