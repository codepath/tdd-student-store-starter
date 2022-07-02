# Project #2: Student Store

## Overview

Selling merchandise in the modern era requires digital solutions. For this project, you'll be tasked with designing and constructing an online student store for the College of Codepath. The application entails a frontend user interface for potential customers to peruse the goods, and a backend API to handle data management. The API will be built with Node and Express and the UI will be built with React.

<a href="https://www.loom.com/share/5066a3f9031649f9b3030345b579adc7">
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/5066a3f9031649f9b3030345b579adc7-with-play.gif">
  </a>
  
API Core Features
<a href="https://www.loom.com/share/6a97c7149e474a89ae111cff0e000b66">
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/6a97c7149e474a89ae111cff0e000b66-with-play.gif">
  </a>
  
UI Stretch Features
<a href="https://www.loom.com/share/9529ba46c9b84b93ab5e10d13c63f46a">
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/9529ba46c9b84b93ab5e10d13c63f46a-with-play.gif">
  </a>

### Application Features

#### Core Features

- [x] Displays the following sections: header, banner, search, product grid, about, contact, and footer.
- [x] On initial page load, display the products at the [GET /store endpoint](https://codepath-store-api.herokuapp.com/store).
- [x] User can click on the categories (Clothing, food, etc) to filter the product grid by type.
- [x] User can search for products.
- [x] User can click on a product in the grid to view additional product details. Navigation is via a React Router.
- [x] User can click to expand the shopping cart in the left navigation.
- [x] User can click the '+' button on a product cart to increment that product in the shopping cart.
- [x] User can click the '-' button on a product cart to increment that product in the shopping cart.
- [x] Shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [x] User can check out, and can view receipt upon completion.

#### Stretch Features

- [x] User can click in the top navigation bar to scroll to the relevant section.
- [x] User sees a "not found" display when searching for a nonexistent product.
- [x] Create an endpoint for fetching all orders in the database, and an endpoint for serving an individual order based on its id.
- [ ] Build a page in the UI that displays the list of all past orders and lets the user click on any individual order to take them to a more detailed page of the transaction.
- [ ] Allow users to use an input to filter orders by the email of the person who placed the order.

### Passing Automated Tests

The following specifications were met on the Express backend and the React frontend.

### React UI

**App.jsx**

- [x] The core App component that contains the routes for the app and does the initial data fetching
- [x] Renders a `BrowserRouter` component that contains a `Routes` component with the following routes:
  - [x] `/` - Should render the `Home.jsx` component
  - [x] `/products/:productId` - should render the `ProductDetail` component
  - [x] `*` - anything else should render the `NotFound` component
- [x] Renders the `Navbar` component on every route
- [x] Renders the `Sidebar` component on every route
- [x] Should create **at least** the following state variables:
  - [x] `products` - an array of product objects that is initially empty.
  - [x] `isFetching` - a boolean value representing whether or not the App is currently fetching the `products` from the API.
  - [x] `error` - a variable used to display a message when something goes wrong with the API requests.
  - [x] `isOpen` - a boolean value representing whether or not the `Sidebar.jsx` is in the open or closed state.
  - [x] `shoppingCart` - should store state for the active user's shopping cart (items they want to purchase and the quantity of each item).
    - [x] Use whatever data type works best here, but make sure the format the `shoppingCart` as an array before passing it to other components.
    - [x] When passed down to other components as a prop, it should formatted as an array of objects.
    - [x] Each object in the array should have two fields:
      - [x] The `itemId` field should store the `id` of the item being purchased.
      - [x] The `quantity` field should store a number representing how many of that item the user is purchasing.
  - [x] `checkoutForm` - the user's information that will be sent to the API when they checkout.
- [x] Leverage the `useEffect` hook to ensure that when the `App.jsx` component is mounted to the screen...
  - [x] It should make a `GET` request to the API's `/store` endpoint with the `axios.get` method.
  - [x] When the request completes successfully, it should store the `products` returned by the response in state.
  - [x] If the request does not complete successfully, or there are no `products` found in the response,
        it should create an error message and store it in the `error` state variable.
- [x] The `App.jsx` component should define handler functions to be passed as props to the `Home` and `ProductDetail` components.
  - [x] Define as many as are needed.
  - [x] At minimum, **create these five handlers**:
    - [x] The **`handleOnToggle`** function. When called...
      - [x] It should toggle the open/closed state of the `Sidebar`.
    - [x] The **`handleAddItemToCart`** function. When called...
      - [x] It should accept a single argument - `productId`
      - [x] It should add that product to the `shoppingCart` if it doesn't exist, and set its quantity to `1`.
      - [x] If it does exist, it should increase the quantity by `1`.
      - [x] It should add the price of the product to the total price of the `shoppingCart`.
    - [x] The **`handleRemoveItemFromCart`** function. When called...
      - [x] It should accept a single argument - `productId`
      - [x] It should decrease the quantity of the item in the `shoppingCart` by `1`, but only if it already exists.
      - [x] If it doesn't exist, the function should do nothing.
      - [x] If the new quantity is `0`, it should remove the item from the `shoppingCart`
    - [x] The **`handleOnCheckoutFormChange`** function. When called...
      - [x] It should receive two arguments:
        - [x] `name` - the `name` attribute of the input being updated
        - [x] `value` - the new value to set for that input
      - [x] It should update the `checkoutForm` object with the new value from the correct input(s)
    - [x] The **`handleOnSubmitCheckoutForm`** function. When called...
      - [x] It should submit the user's order to the API
      - [x] To submit the user's order, it should leverage the `axios.post` method to send a `POST` request to the `/store` endpoint.
      - [x] The body of that `POST` request should be an object with two fields:
        - [x] The `user` field:
          - [x] Should be an object containing `name` and `email` properties
          - [x] Each property should be set to the correct value found in the `checkoutForm`
        - [x] The `shoppingCart` field:
          - [x] Should contain the user's order formatted as an array of objects.
          - [x] Each object in the array should have two fields:
            - [x] The `itemId` field should store the `id` of the item being purchased.
            - [x] The `quantity` field should store a number representing how many of that item the user is purchasing.
          - [x] Don't include the `total` price here, since we'll be calculating that on the backend. Remember to never trust the client!

**Navbar.jsx**

- [x] Should render JSX that is wrapped by a `nav` element with a `className` of `navbar`
- [x] Should render the `Logo` component that links to the `/` route when clicked

**Logo.jsx**

- [x] Should render JSX that is wrapped by a `div` element with a `className` of `logo`
- [x] Should use the `Link` component from `react-router-dom` to link to the home route (`/`) when clicked

**Home.jsx**

- [x] Should render JSX that is wrapped by a `div` element with a `className` of `home`
- [x] Should accept **at least** the following props:
  - `products` - an array of product objects
  - `handleAddItemToCart` - handler function defined in the `App.jsx` component
  - `handleRemoveItemToCart` - handler function defined in the `App.jsx` component
- [x] Should render the `Hero` component
- [x] Should render the `ProductGrid` component

**Hero.jsx**

- [x] Should render JSX that is wrapped by a `div` element with a `className` of `hero`
- [x] Should display an intro message inside an element with the `className` of `intro`. That message should contain the text `"Welcome!"` somewhere within it.
- [x] Should render a hero image inside an `img` tag with the `className` of `hero-img`.

**ProductGrid.jsx**

- [x] Should render JSX that is wrapped by a `div` element with a `className` of `product-grid`
- [x] Should accept **at least** the following props:
  - `products` - an array of product objects
  - `handleAddItemToCart` - handler function defined in the `App.jsx` component
  - `handleRemoveItemToCart` - handler function defined in the `App.jsx` component
- [x] Should iterate over its `products` prop, rendering a `ProductCard` component for each one. Set the `showDescription` prop to `false` for all of the `ProductCard` components rendered in the `ProductGrid` component.

**ProductDetail.jsx**

- [x] Should render JSX that is wrapped by a `div` element with a `className` of `product-detail`
- [x] Should accept **at least** the following props:
  - `handleAddItemToCart` - handler function defined in the `App.jsx` component
  - `handleRemoveItemToCart` - handler function defined in the `App.jsx` component
- [x] Should define **at least** a `product` state variable and updater
- [x] It should leverage the `useParams` hook from `react-router-dom` to extract the `productId` param from the url.
- [x] When the component is mounted to the screen...
  - [x] It should make a `GET` request to the `/store/:productId` endpoint with the `axios.get` method.
  - [x] The `:productId` part of the request should be replaced with the `productId` pulled from the url.
  - [x] When the initial request is loading, it should render an `h1` element with the `className` of `loading` and contain the text `"Loading..."`
  - [x] It should store the `product` received by the request in state and then render the `ProductView` component.
  - [x] If no `product` is found with that `id`, it should render the `NotFound` component

**ProductView.jsx**

- [x] Should render JSX that is wrapped by a `div` element with a `className` of `product-view`
- [x] Should accept **at least** the following props:
  - `product` - the `product` object returned by the API request
  - `productId` - the id of the product extracted from the url
  - `quantity` - the quantity for this product found in the `shoppingCart`
  - `handleAddItemToCart` - handler function
  - `handleRemoveItemToCart` - handler function
- [x] It should display an `h1` element with the `className` of `product-id` that contains the text: `Product #` followed by the `productId` prop
- [x] It should render a `ProductCard` component and pass it the props it needs. It should also set the `showDescription` prop to `true` for this product card.

**ProductCard.jsx**

- [x] Should render JSX that is wrapped by a `div` element with a `className` of `product-card`
- [x] Should accept **at least** the following props:
  - `product` - a product object
  - `productId` - a `number` representing the `id` of the product
  - `quantity` - the quantity for this product found in the `shoppingCart`
  - `handleAddItemToCart` - handler function
  - `handleRemoveItemToCart` - handler function
  - `showDescription` - boolean
- [x] Should render the `name` of the product inside an element with the `className` of `product-name`
- [x] Should render the `price` of the product inside an element with the `className` of `product-price`. The price should formatted so that it starts with a `$`, and has **at least one** integer digit, along with **exactly two** decimal digits. Examples - `$22.99`, `$860.20`, and `$0.50`
- [x] If the `showDescription` prop is set to `true`, it should render the `description` of the product inside an element with the `className` of `product-description`.
- [x] Should render an `img` element for the product:
  - [x] The `img` element should have a `src` attribute to set to the `image` property of the `product` prop.
  - [x] The `img` element should be wrapped in a `Link` component from `react-router-dom`.
    - [x] The `Link` element should have a `to` prop so that when the `img` element is clicked on, it should navigate to the product detail route for that product using its `id` attribute. For example, a product with an `id` of `4` should create a `Link` with its `to` prop set to `/products/4`.
    - [x] The `Link` that wraps the `img` element should be nested somewhere inside an element with the `className` of `media`.
- [x] Should render two `buttons` elements...
  - [x] One button with a `className` of `add`. When clicked, it should call the `handleAddItemToCart` function with the `id` of the `product` as its only argument.
  - [x] One button with a `className` of `remove`. When clicked, it should call the `handleRemoveItemFromCart` function with the `id` of the `product` as its only argument.
- [x] Should display the current quantity of items that the user has selected in their shopping cart. The quantity should be rendered inside an element with the `className` of `product-quantity`. If none of that particular item have been added to the shopping cart, it should render nothing there.

**Sidebar.jsx**

- [x] Should render JSX that is wrapped by a `section` element with the `className` of `sidebar`
- [x] Should accept **at least** the following props (and probably a few more):
  - `isOpen` - boolean representing the open/closed state of the Sidebar
  - `shoppingCart` - the active user's cart formatted as an array of objects with `itemId` and `quantity` keys
  - `products` - the array of products fetched from the API
  - `checkoutForm` - the form state for the `CheckoutForm` component
  - `handleOnCheckoutFormChange` - handler function to update the `checkoutForm` object
  - `handleOnSubmitCheckoutForm` - handler function to submit the user's order to the API
  - `handleOnToggle` - handler function to toggle open/closed `Sidebar` state
- [x] It should always render a `button` element with the `className` of `toggle-button`. When that button is clicked it should change the `isOpen` prop by calling the `handleOnToggle` prop.
- [x] When the sidebar is opened, it should display the `ShoppingCart` and `CheckoutForm` components and should be wider than `350px`.
- [x] When the sidebar is closed, it should only render the toggle button and shouldn't be wider than `150px`.

**ShoppingCart.jsx**

- [x] Should render JSX that is wrapped by a `div` element with the `className` of `shopping-cart`
- [x] Should accept **at least** the following props (and probably a few more):
  - `isOpen` - boolean representing the open/closed state of the Sidebar
  - `products` - the array of products fetched from the API
  - `shoppingCart` - the active user's cart formatted as an array of objects with `itemId` and `quantity` keys
- [x] For every item in the `shoppingCart`:
  - [x] It should display the `name` of the item in an element with the `className` of `cart-product-name`. Remember that items in the `shoppingCart` prop will **only** contain the `itemId` and `quantity` fields. Other props will have to be used to conver the `itemId` field to the `product`'s name.
  - [x] It should display the `quantity` of the item in an element with the `className` of `cart-product-quantity`
- [x] It add up the cost of all items (make sure to use the quantity of the item requested), and render that amount **rounded up to exactly 2 decimal places** inside an element with the `className` of `subtotal`. Make sure it is prefixed with a dollar sign ($)!
- [x] It should calculate the cost of taxes on that subtotal (using 8.75% as the tax rate), add that amount to the subtotal, and render the total cost **rounded up to exactly 2 decimal places** inside an element with the `className` of `total-price`. Make sure it is prefixed with a dollar sign ($)!
- [x] If no items exist in the `shoppingCart`, it should render this message: `"No items added to cart yet. Start shopping now!"` inside an element with the `className` of `notification`

**CheckoutForm.jsx**

- [x] Should render JSX that is wrapped by a `div` element with the `className` of `checkout-form`
- [x] Should accept **at least** the following props:
  - `isOpen` - boolean
  - `shoppingCart` - the active user's cart formatted as an array of objects with `itemId` and `quantity` keys
  - `checkoutForm` - the form state for the `CheckoutForm` component
  - `handleOnCheckoutFormChange` - handler function to update the `checkoutForm`
  - `handleOnSubmitCheckoutForm` - handler function to submit the user's order to the API
- [x] Should render two `input` elements, each with the `className` of `checkout-form-input`
  - [x] The `checkoutForm` prop should supply the correct props needed to create the two controlled inputs:
    - [x] The first input should have:
      - [x] the `type` prop set to `email`
      - [x] the `name` prop set to `email`
      - [x] the `placeholder` prop set to `student@codepath.org`
      - [x] the `value` prop set by `checkoutForm.email`.
      - [x] a valid `onChange` prop that uses the `handleOnCheckoutFormChange` function to update the `checkoutForm` state
    - [x] The second input should have:
      - [x] the `type` prop set to `text`
      - [x] the `name` prop set to `name`
      - [x] the `placeholder` prop set to `Student Name`
      - [x] the `value` prop set by `checkoutForm.name`.
      - [x] a valid `onChange` prop that uses the `handleOnCheckoutFormChange` function to update the `checkoutForm` state
- [x] Should render a `button` element with the `className` of `checkout-button`.
  - [x] It should contain the text `Checkout`.
  - [x] When clicked, it should call the `handleOnSubmit` function.
    - [x] If that request fails, the `CheckoutForm` component should display an error message inside an element with the `className` of `error`.
    - [x] If the `POST` request is successful...
      - [x] The `CheckoutForm` component should display a success message that contains the text `"Success!"` inside an element with the `className` of `success`.
      - [x] The `shoppingCart` should be emptied
      - [x] The `checkoutForm` should be reset to its default state.

**Server** - Create an Express server

- [x] Wire up the appropriate middleware and error handlers in the `app.js` file
- [x] Create a single `GET` request handler at the `/` endpoint. It should respond to all `GET` requests with a JSON object and a `200` status code. The JSON response should contain a single key of `ping` that stores the string value: `pong`. For example: `{ "ping": "pong" }`.
- [x] Have a `server.js` file that starts the app by listening on port `3001`.

**Models** - The API should use a `Store` model that handles the following

- [x] List all products currently in the `db.json` file
- [x] Fetch a single product by its id
- [x] Create a purchase order

**Routes** - The API should contain a route mounted at the `/store` endpoint

- [x] It should respond to `GET` requests to `/store` with an array of all products in the store in this format: `{ "products": products }`
- [x] It should respond to `GET` requests to `/store/:productId` with a single product based on the product's id using this JSON format: `{ "product": product }`
- [x] It should allow `POST` requests to the `/store` endpoint:
  - [x] The endpoint should create purchase orders for users and save them to the `db.json` file
  - [x] The endpoint should accept a request body that contains `shoppingCart` and `user` fields.
    - [x] The `shoppingCart` field should contain the user's order.
      - [x] This should be an array of objects.
      - [x] Each object in the array should have two fields:
        <!-- - [ ] The `item` field should store an object of the item being purchased -->
        - [x] The `itemId` field should store the `id` of the item being purchased
        - [x] The `quantity` field should store a number representing how many of that item the user is purchasing.
    - [x] The `user` field should contain the name and email of the person placing the order.
    - [x] When either the `shoppingCart` or `user` fields are missing, it should throw a `400` error.
    - [x] If there are duplicate items in the `shoppingCart`, it should throw a `400` error.
    - [x] If either the `quantity` or `itemId` field is missing for any of the items in the `shoppingCart`, a `400` error should be thrown.
    - [x] When both are there, it should calculate the total cost of all the items (including quantities), add a `8.75%` tax to the total, and create a new purchase object containing 6 required fields and 1 optional field:
      - **required**:
        - [x] `id` - the new `id` of the purchase should be equal to one more than the current number of existing purchases
        - [x] `name` - the name of the user making the purchase
        - [x] `email` - the email of the user making the purchase
        - [x] `order` - the `shoppingCart` value sent in the `POST` request
        - [x] `total` - the calculated total of the order
        - [x] `createdAt` - a string representation of the date and time when the order was placed
      - **optional**:
        - [ ] `receipt` - text describing the order (what might go on a receipt)
    - [ ] It should then send a JSON response back to the client with the new purchase like so: `{ "purchase": purchase }`. The response should have a `201` status code for a resource created action.

---

### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

I felt unprepared to implement the Browser Router, however aside from that I felt prepared. I also wish I had known about HTML libraries that enable developers to write add features to their sites without worrying about the css aspect. Someone in my class used that tool and they were able to get a lot done quickly since they weren't dealing with css bugs

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

If I had more time I would have implemeted the stretch features and tried to use an API with a more robost selection of items in order to try out different methods of implementing the search engine and see how effective they are. Since the data we were working with was so small it was hard to determine how effective my search implementation was

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Like I said earlier someone in my class used a css library and didn't have to write much css which was a huge time saver for them and considering how long this project took me, i think it's safe to say it would've been nice to have used it. However I'm glad I didn't know about it because I think I learnt a lot about design and css through this project and it was honestly my favourite part of working on it (when it wasn't being buggy of course). Something that went well was that I took Yilika's advice on using existing websites as a wireframe for my own instead of just drawing all my inspiration from the demo site we were provided. It really helped me fill in some gaps in my knowlege and learn a lot of new skills along the way. It also just made me feel like a real web developer.

Add your response here

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Roman and Chris were such great buddies and helped me a lot when I got stuck. So did Yilika and Vincent (Special thanks to Vincent to adopting me into the overflow room).
