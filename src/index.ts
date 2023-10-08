import { Item } from './Item'
import { User } from './User'
import { v4 as uuidv4 } from 'uuid'
let myUuid = uuidv4()
console.log(myUuid)

function createUser(name: string, age: number): User {
  const user = new User(name, age)
  return user;
}
const user1 = createUser('John Doe', 25);
console.log(user1);


function createItem(name: string, price: number, quantity: number, description: string): Item {
  const item = new Item(name, price, quantity, description)
  return item;
}
const item = createItem('milk', 25.99, 4, 'good');
console.log(item);

// function cartHTMLElement() {
//     const cart = getCart(); // Replace this with your own cart retrieval logic
//     const container = document.createElement('div');

//     for (const item of cart) {
//       const itemElement = document.createElement('div');
//       itemElement.innerText = `Name: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price}`;
//       container.appendChild(itemElement);
//     }

//     return container;
//   }

// Function to create a remove button for an item
// function createRemoveButton(itemId, isRemoveAll) {
//     const button = document.createElement('button');
//     button.textContent = isRemoveAll ? 'Remove All' : 'Remove';
//     button.id = isRemoveAll ? `remove-all-${itemId}` : `remove-${itemId}`;
//     // Add event listener to call a separate function when clicked
//     button.addEventListener('click', removeFromCart);
//     return button;
//   }

// Function to remove an item from the cart
// function removeItem(event) {
//   const itemId = event.target.id.replace('remove-', '');
// Perform necessary actions to remove the item from the cart
// ...
// }

// Example usage
// const cartItems = [
//   { id: 'item-1', name: 'Product A' },
//   { id: 'item-2', name: 'Product B' },
//   // ...
// ];

// Create remove buttons for each item in the cart
// cartItems.forEach((item) => {
// const removeButton = createRemoveButton(item.id, false);
// const removeAllButton = createRemoveButton(item.id, true);
// Append buttons to the DOM or your desired location
// });

// const subButton = document.getElementById("submit");
// subButton.addEventListener("click",() => (console.log("submitButton")))

// const loginform: HTMLElement | null = document.getElementById('loginForm')

// loginform?.addEventListener("submit", (event) => {
//   event.preventDefault()
//   // window.location.reload()
//   const user: HTMLInputElement | null = document.querySelector("#userInput")
//   const age: HTMLInputElement | null = document.querySelector("#ageInput")
//   console.log(user?.value, age?.value)

//   const myUser: MyShop = new MyShop(user?.value, age?.value)
//   console.log(myUser)

//   const userInfo: HTMLDivElement | null = document.querySelector('#user-info')
//   console.log(userInfo)


  // document.querySelector('#user-info')?.insertAdjacentHTML("beforeend", `<h2>Hello User: ${myUser.user}<h2>` )

//   if (userInfo) {
//     userInfo.innerHTML = `<h1>Hello New User: ${myUser.user}<h1>`
//   }
// })


function runClass(): void {
  // Create a new user
  const user4 = createUser('Mike Doe', 22);
  console.log(user4);
  // Create 3 items to sell
  const itemA = new Item('juice', 5.06, 2, 'great');
  const itemB = new Item('bread', 6.07, 2, 'scrumptious');
  const itemC = new Item('rice', 9.00, 1, 'tasty');
  // Add Item A to the user's cart
  user4.addToCart(itemA);
  // Print the contents of the user's cart
  console.log(user4.printCart());
  // Add 3 items to the user's cart
  user4.addToCart(itemB);
  user4.addToCart(itemC);
  // Print the contents of the user's cart
  console.log(user4.printCart());
  // Print the total of the user's cart
  console.log(user4.cartTotal());
  // Remove all items from the user's cart
  user4.removeFromCart(itemC);
  user4.removeFromCart(itemA);
  user4.removeFromCart(itemB);
  // Print the contents of the user's cart
  console.log(user4.printCart());
  // Print the total of the user's cart
  console.log(user4.cartTotal());

}
console.log(runClass())

