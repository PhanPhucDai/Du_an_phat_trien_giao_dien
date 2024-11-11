 
let arrayNhungMonPhoBien = [];

function nhungMonPhoBien(id, img1, img2, name, description, price) {
    this.id = id;
    this.img1 = img1;
    this.img2 = img2;
    this.description = description;
    this.price = price;
    this.name = name;
}

let mon1 = new nhungMonPhoBien(1, 'img/coffeekem_dolly.jpeg', 'img/Cofffe_Dolly.jpeg', 'Coffee kem tươi matcha', 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt', '$2.19');
let mon2 = new nhungMonPhoBien(2, 'img/travai2_dolly.jpeg', 'img/travai_dolly.jpeg', 'Trà vải kem tươi', 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt', '$2.59');
let mon3 = new nhungMonPhoBien(3, 'img/daocamsa2_dolly.jpeg', 'img/daocamsa_dolly.jpeg', 'Trà đào cam sả', 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt', '$3.19');
let mon4 = new nhungMonPhoBien(4, 'img/matcha_dolly.jpeg', 'img/greentea_dolly.jpeg', 'Trà sữa matcha kem tươi', 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt', '$2.1');

let mon5 = new nhungMonPhoBien(5, 'img/hongtra_dolly.jpeg', 'img/hongtra2_dolly.jpeg', 'Hồng trà tươi', 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt', '$2.19');
let mon6 = new nhungMonPhoBien(6, 'img/suadao_dolly.jpeg', 'img/suadao2_.jpeg', 'Sữa thanh mát', 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt', '$2.59');
let mon7 = new nhungMonPhoBien(7, 'img/tradau_dolly.jpeg', 'img/tradau2_dolly.jpeg', 'Trà dâu tươi', 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt', '$3.19');
let mon8 = new nhungMonPhoBien(8, 'img/hongtra2_dolly.jpeg', 'img/hongtra_dolly.jpeg', 'Hồng trà tươi 2 ', 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt', '$2.1');

let mon9 = new nhungMonPhoBien(9, 'img/cafe1.jpg', 'img/cafe2.jpg', 'Cafe', 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt', '$2.40');
let mon10 = new nhungMonPhoBien(10, 'img/cafe_den1.jpg', 'img/cafe_den2.jpg', 'Cafe Đen', 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt', '$3.59');
let mon11 = new nhungMonPhoBien(11, 'img/cafe_denda1.jpg', 'img/cafe_denda2.jpg', 'Cafe Đen đá', 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt', '$2.89');
let mon12 = new nhungMonPhoBien(12, 'img/cafe_kemcacao.jpg', 'img/cafe_kemcaccao2.jpg', 'Cafe Cacao', 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt', '$2.1');

arrayNhungMonPhoBien.push(mon1);
arrayNhungMonPhoBien.push(mon2);
arrayNhungMonPhoBien.push(mon3);
arrayNhungMonPhoBien.push(mon4);
arrayNhungMonPhoBien.push(mon5);
arrayNhungMonPhoBien.push(mon6);
arrayNhungMonPhoBien.push(mon7);
arrayNhungMonPhoBien.push(mon8);
arrayNhungMonPhoBien.push(mon9);
arrayNhungMonPhoBien.push(mon10);
arrayNhungMonPhoBien.push(mon11);
arrayNhungMonPhoBien.push(mon12);

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const productId = parseInt(getQueryParam('id'));

 
let product;
for(let i=0 ;i<arrayNhungMonPhoBien.length;i++){
  if(arrayNhungMonPhoBien[i].id===productId){
    product=arrayNhungMonPhoBien[i];
    break;
  }
}
console.log(product);
if (product) {
  document.getElementById('pic1').src = product.img1;
  document.getElementById('pic2').src = product.img2;
  document.getElementById('imgMain').src = product.img1;
  document.getElementById('name_product').innerText = `${product.name}`;
  document.getElementById('describes_product').innerText = `${product.description}`;
  document.getElementById('price_product').innerText = `${product.price}`;


} else {
  console.log("Sản phẩm không tìm thấy.");
}

const img1=document.getElementById('pic1');
const img2=document.getElementById('pic2');

const themVaoGioHang=document.getElementById('themVaoGioHang');
img1.addEventListener('click',function(){
  document.getElementById('imgMain').src = product.img1;
});


img2.addEventListener('click',function(){
  document.getElementById('imgMain').src = product.img2;
});
themVaoGioHang.onclick = function() {
  themGioHang(product);
};