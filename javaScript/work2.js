let data={
    id:101,
    img:"https://www.pexels.com/photo/gentcreate-leather-phone-case-leather-card-holder-13706809/",
    name:"Iphone",
    qty:1,
    price:70000,
    total:0

}
let htmldata=`<tr>
<td>${data.id}</td>
<td>
    <img src="${data.img}" alt="Image Not Found" width="35px" height="35px">
</td>
<td>
${data.name}
</td>
<td>${data.price}.00 &#8377;</td>
<td>
    <i class="fa fa-minus-circle" id="minus"></i>
    <span id="qty"class="ml-2 mr-2">${data.qty}</span>
    <i class="fa fa-plus-circle" id="plus"></i>
</td>
<td><span id="total">${data.qty*data.price}</span>.00 &#8377;</td>
</tr>`;

let content=document.getElementById('display');
content.innerHTML=htmldata;

let qtytag=document.getElementById('qty');
let plstag=document.getElementById('plus');
let dectag=document.getElementById('minus');
let totalPrice=document.getElementById('total');
// let qty=0;
// qtytag.textContent=qty;
function plus()
{
    data.qty++;
    qtytag.textContent=data.qty;
    totalPrice.innerText=`${data.qty*data.price}`;
}
function minus()
{
    if(data.qty<=0)
    {
        qtytag.textContent=0;
    }
    else
    {
        data.qty--;
        qtytag.textContent=data.qty;
        totalPrice.innerText=`${data.qty*data.price}`;
    }
   
}
plstag.addEventListener('click',plus);
dectag.addEventListener('click',minus);