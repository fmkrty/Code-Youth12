const product = [
    {
        id: 0,
        image: 'https://i.pinimg.com/originals/3d/2f/ea/3d2feaa453b4d792a6c072589411a0e7.png',
        title: 'PSG Jersey',
        price: 120,
    },
    {
        id: 1,
        image: 'https://www.gogoalshopcloud.com/upload/ttmall/img/20220719/408b284174ad5f95f36b39b60846a1ce.png',
        title: 'Manchester United Jersey',
        price: 60,
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/originals/9d/89/96/9d8996c868b3a9fc26807d1a550b2136.png',
        title: 'Real Madrid Jersey',
        price: 230,
    },
    {
        id: 3,
        image: 'https://cf.minejerseys.cn/html/upload/item_img/202108/64714/1629265372676787385.png',
        title: 'Galatasaray Jersey',
        price: 100,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}