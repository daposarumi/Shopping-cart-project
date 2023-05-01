export function clearInputValue() {
    inputFieldEl.value = ""

}

export function appendtoShoppingList(itemValue) {
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}

export function appendItemToShoppingList(itemValue) {
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}