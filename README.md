<img src='https://github.com/LeeBingler/ReactShop/assets/98109693/7f507a9b-7356-42f6-a1e2-98f2ae02514c' alt='ReactShop' width='100%' height='200px'/>

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![Static Badge](https://img.shields.io/badge/Dependencies-NPM-black)
![GitHub repo size](https://img.shields.io/github/repo-size/LeeBingler/ReactShop)
![Netlify](https://img.shields.io/netlify/f6254914-d42a-40d0-8c8e-71f0b483b68d)

# ReactShop

An ecommerce website build with React.JS and Tailwind.

![ReactShop](https://github.com/LeeBingler/ReactShop/assets/98109693/2170feb3-5dcc-43d3-aa65-baeca7f81962)

## Tech Stack
1. HTML
2. CSS
3. JavaScript

## Frameworks and Libraries
1. React
2. Tailwind
3. Node.JS

## Testing Librairie
- Vitest

## API's
[Fake Store API](https://fakestoreapi.com/)

### Get all products
```javascript
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
```

### Get a single product
```javascript
fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
```

## Build/Run

#### Requirements

- Node.js
- NPM

```javascript
/* First install the dependencies */
npm install

/* Then run the web App */
npm run dev

/* The Test */
npm run test
```
## Deployement

```javascript
npm run build
```

### Copyright and license

The MIT License (MIT). Please see License File for more information.
