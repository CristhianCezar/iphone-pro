function showShoppingCart() {  
    
    document.getElementById("navShoppingCart").removeAttribute("id"); 
}

function closeShoppingcart() {
    document.querySelector(".navShoppingCart").setAttribute("id", "navShoppingCart");
}

    function addProductCart() {

        const getImgProduct = document.getElementById("product");
        const getNameProduct = document.getElementById("title");
        const getPriceProduct = document.getElementById("price");
        const imgProduct = document.getElementById("imgProduct");
        const nameProduct = document.getElementById("nameProduct");
        const priceProduct = document.getElementById("priceProduct");

        const getProduct = {
            img: getImgProduct.src,
            name: getNameProduct.innerText,
            price: getPriceProduct.innerText,
        };

        for (const i in getProduct) {
            console.log(getProduct[i])
        }
            
            let concatenateImg =  imgProduct.setAttribute('src', getProduct.img);
            let concatenateName = nameProduct.innerText + getProduct.name;
            let concatenatePrice = priceProduct.innerText + getProduct.price;

            imgProduct.innerHTML = concatenateImg;
            nameProduct.innerText = concatenateName;
            priceProduct.innerText = concatenatePrice;

    }