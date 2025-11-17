//select all products
//Log all products

const main = document.querySelector('#main');
//console.log(main)

const section = main.firstElementChild;

const products = section.lastElementChild.children

console.log(products);


 //Get Cart
const cart = main
    .firstElementChild
    .nextElementSibling
    .lastElementChild;

console.log(cart)

//Step 2. Convert HTML Collections to Array
const productArray = Array.from(products);

productArray.forEach((p) =>{
    p.addEventListener('click', () =>{
        //step 4
        const h5 = document.createElement('h5')
        h5.innerText = p.firstElementChild.innerText;

        //step 5
        cart.appendChild(p);
    })
});


  