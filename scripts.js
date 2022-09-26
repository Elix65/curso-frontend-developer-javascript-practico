
const menuEmail = document.querySelector('.navbar-email');

const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');

const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);

menuHamIcon.addEventListener('click', toggleMobileMenu);

menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleMobileMenu(){

    const isAsideCloed = shoppingCartContainer.classList.contains('inactive');
    mobileMenu.classList.toggle('inactive');
    if (!isAsideCloed){
        shoppingCartContainer.classList.add('inactive');
    }
}

function toggleDesktopMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    desktopMenu.classList.toggle("inactive");
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }


}

function toggleCarritoAside(){

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains ('inactive');


    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
 
    shoppingCartContainer.classList.toggle('inactive');

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

}

const productList = [];

productList.push({
name: 'Bike',
price: 120,
img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'Iphone',
    price: 450,
    img: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
    });

productList.push({
    name: 'microwave',
    price: 100,
    img: 'https://images.pexels.com/photos/4686822/pexels-photo-4686822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        
    });

function lectorArrays (arr) {
    for (arr of productList){
    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute( 'src', arr.img);
        //Product = {name, price, image}
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const ProductInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = "$" + arr.price;
        const productName = document.createElement('p');
        productName.innerText =  arr.name;
    
        ProductInfoDiv.appendChild(productPrice);
        ProductInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    
        productInfoFigure.appendChild(productImgCart);
    
    
        productInfo.appendChild(ProductInfoDiv);
        ProductInfoDiv.appendChild(productInfoFigure);
    
        productCard.appendChild(imgProduct);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
// Al poner el for en una funcion, nos da la posbilidad de llamar a otros arrays, dependiendo de nuestra necesidad, Esto es muy util. Por que quiza tengamos otra lista en otro lado del codigo :D
lectorArrays(productList)

