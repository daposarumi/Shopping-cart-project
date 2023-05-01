export function clearInputValue() {
    inputFieldEl.value = ""

}

export function appendtoShoppingList(itemValue) {
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}
