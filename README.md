# Getting Started with Create React App

### Ecommerce Website Project
This project is an ecommerce website for selling bags. It includes a frontend built with React, a backend built with Node.js and MongoDB, and uses Redux for state management.

### Table of Contents
Features
Technologies Used
Installation
Usage
API Endpoints
Redux Flow
Error Handling
Contributing
License

### Features
Add items to the cart without authentication
Update item quantities in the cart
Remove items from the cart
View all items in the cart
Clear all items from the cart

### Technologies Used
Frontend: React
Backend: Node.js, Express.js
Database: MongoDB
State Management: Redux with Thunk middleware

### Installation
Clone the repository:
git clone https://github.com/Erum-Rehman/bagX
cd BagX

### Install dependencies for the backend:
cd backend
npm install

### Install dependencies for the frontend:
cd ../frontend
npm install

### Set up environment variables:
`MONGO_URI=<mongoURL>`
PORT=5000

### Usage
`Run the backend server:`
cd backend
npm run dev

`Run the frontend server:`
cd ../frontend
npm start

### API Endpoints
Add to Cart: `POST /api/cart/`
Get Cart Items: `GET /api/cart/`
Update Cart Item Quantity: `PUT /api/cart/:id`
Remove from Cart: `DELETE /api/cart/:id`
Clear Cart: `DELETE /api/cart/`

### Redux Flow
Actions:

`CART_ITEMS_FETCH_REQUEST`
`CART_ITEMS_FETCH_SUCCESS`
`CART_ITEMS_FETCH_FAILURE`
`CART_ITEM_ADD_SUCCESS`
`CART_ITEM_REMOVE_SUCCESS`
`UPDATE_CART_ITEM_QTY`
`DELETE_CART`

### Reducers:
cartReducer: Manages the state of cart items, loading status, and errors.

### Error Handling
The application handles errors at both the frontend and backend levels. On the backend, appropriate HTTP status codes and error messages are returned. On the frontend, error messages are displayed to the user.