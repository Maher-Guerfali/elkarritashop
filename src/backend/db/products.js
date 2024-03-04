import sun3 from "../../assets/sunglasses/sun3.png";
import sun4 from "../../assets/sunglasses/sun4.png";
import sun5 from "../../assets/sunglasses/sun5.png";
import sun7 from "../../assets/sunglasses/sun7.png";
import sun8 from "../../assets/sunglasses/sun8.png";
import sun9 from "../../assets/sunglasses/sun9.png";
import sun10 from "../../assets/sunglasses/sun10.png";
import sun11 from "../../assets/sunglasses/sun11.png";
import sun12 from "../../assets/sunglasses/sun12.png";
import sun13 from "../../assets/sunglasses/sun13.png";
import sun14 from "../../assets/sunglasses/sun14.png";

import sports1 from "../../assets/sports/sports1.png";
import sports2 from "../../assets/sports/sports2.png";
import sports3 from "../../assets/sports/sports3.png";


import vision1 from "../../assets/vision/vision1.png";
import vision2 from "../../assets/vision/vision2.png";
import vision3 from "../../assets/vision/vision3.png";
import vision4 from "../../assets/vision/vision4.png";
import vision5 from "../../assets/vision/vision5.png";
import vision6 from "../../assets/vision/vision6.png";
import vision7 from "../../assets/vision/vision7.png";
import vision8 from "../../assets/vision/vision8.png";
import vision9 from "../../assets/vision/vision9.png";
import Printed1 from "../../assets/3dprinted/catvoid.jpg"
import Printed2 from "../../assets/3dprinted/goldvase.jpg"
import Printed3 from "../../assets/3dprinted/ps4support.jpg"
import Printed4 from "../../assets/3dprinted/support.jpg"
import desk from "../../assets/3dprinted/desk.jpg";
import clay1 from "../../assets/clayprinted/1.png";
import clay2 from "../../assets/clayprinted/2.png";
import clay3 from "../../assets/clayprinted/3.png";

import ali from "../../assets/aliproduct/all.png";
import ali1 from "../../assets/aliproduct/strn.png";
import ali2 from "../../assets/aliproduct/girlneck.avif";
import ali3 from "../../assets/aliproduct/eze.png";
import ali4 from "../../assets/aliproduct/w.png";

//import clay4 from "../../assets/clayprinted/4.png";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
export const products = [
  {
    _id: "3d7e9c33-0080-4bd2-b2bf-56552da31e35",
    qty: 4,
    name: "Little Cow",
    //description:
      //"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //brand: "Ray-Ban",
    category: "Clay",
    //gender: "Men",
    weight: "30g",
    quantity: 10,
    image: clay1,
    rating: 4.5,
    price: 30,
    newPrice: 27,
    trending: true,
  },
  {
    _id: "887cdd99-1503-4527-aef4-88c521126a47",
    qty: 0,
    name: "Little Rabbit",
    description:
      "Pellentesque ac tortor sed ipsum feugiat condimentum.Pellentesque ac tortor sed ipsum feugiat condimentum.",
    brand: "Persol",
    category: "Clay",
    //gender: "Men",
    weight: "100g",
    quantity: 5,
    image: clay2,
    rating: 4.8,
    price: 35,
    newPrice: 32,
    trending: true,
  },
  {
    _id: "dc2b2495-eb6c-4889-a6f7-3c8853a01ba2",
    qty: 0,
    name: "Leaf Necklace",
    description:
      "Integer et nunc in turpis maximus facilisis ac ac elit.Integer et nunc in turpis maximus facilisis ac ac elit.",
    brand: "Kate Spade",
    category: "Clay",
    gender: "Unisex",
    weight: "750g",
    quantity: 15,
    image: clay3,
    rating: 4.7,
    price: 24,
    newPrice: 22,
    trending: true,
  },
 
  {
    _id: "6033723f-a8db-4ad8-bfda-d191778141aa",
    qty: 0,
    name: "PC/IPad Support",
    description:
      "PC Support",
    
    category: "3D Printable",
   // gender: "Women",
    weight: "120g",
    quantity: 9,
    image: Printed4,
    rating: 4.3,
    price: 29,
    newPrice: 25,
  },
  {
    _id: "ac072970-8dac-42fe-8c31-a8fa6fd4b64a",
    qty: 0,
    name: "pencil desk",
   // description:
     // "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
    brand: "Carrera",
    category: "3D Printable",
   // gender: "Unisex",
    weight: "550g",
    quantity: 7,
    image: Printed1,
    rating: 4.8,
    price: 49,
    newPrice: 39,
  },
  {
    _id: "8ad38385-1211-4192-8108-db851b4e9434",
    qty: 0,
    name: "Golden line vase",
    description:
      "",
    //brand: "Carrera",
    category: "3D Printable",
   // gender: "Unisex",
    weight: "550g",
    quantity: 7,
    image: Printed2,
    rating: 4.8,
    price: 49,
    newPrice: 43,
  },
  {
    _id: "8ad38385-1211-4192-8108-db8rf4e9434",
    qty: 0,
    name: "Leaf earring",
    description:
      "",
    //brand: "Carrera",
    category: "Retail",
   // gender: "Unisex",
    //weight: "55g",
    quantity: 2,
    image: ali1,
    rating: 4.8,
    price: 49,
    newPrice: 43,
  },
  {
    _id: "8ad38385-1211-4192-8108-db85frfref9434",
    qty: 0,
    name: "Jasmin earring",
    description:
      "",
    //brand: "Carrera",
    category: "3D Printable",
   // gender: "Unisex",
    weight: "550g",
    quantity: 7,
    image: ali4,
    rating: 4.8,
    price: 49,
    newPrice: 43,
  },
  
  {
    _id: "c76b3840-47d2-4d38-b465-af68e2af9dcd",
    qty: 0,
    name: "Pc Support",
    description:
      "Support for Laptop Pc.",
    brand: "El Karrita",
    category: "3D Printable",
    gender: "Unisex",
    weight: "100g",
    quantity: 5,
    image: Printed3,
    rating: 2.8,
    price: 12,
    newPrice: 12,
  }
];
