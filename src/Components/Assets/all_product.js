import w1_img from './w1.png';   // Import image explicitly from the Assets folder  
import w2_img from './w2.png';
import w3_img from './w3.png';
import w4_img from './w4.png';
import w5_img from './w5.png';
import w6_img from './w6.png';
import w7_img from './w7.png';
import w8_img from './w8.png';
import m1_img from './m1.png';
import m2_img from './m2.png';
import m3_img from './m3.png';
import m4_img from './m4.png';
import m5_img from './m5.png';
import m6_img from './m6.png';
import m7_img from './m7.png';
import m8_img from './m8.png';
import m9_img from './m9.png';
import m10_img from './m10.png';
import k1_img from './k1.png';
import k2_img from './k2.png';
import k3_img from './k3.png';
import k4_img from './k4.png';
import k5_img from './k5.png';
import k6_img from './k6.png';
import k7_img from './k7.png';
import k8_img from './k8.png';
const all_product = [
      {
        id: 1,
        name: "blue frok for the bule lover",
        image:w1_img,
        new_price: 1569.99,
        old_price: 2400.33,
        category: "womens",
      },
      {
        id: 2,
        name: "Anarkali Gown In Purple Georgette Sequins And",
        image: w2_img,
        new_price: 1869.99,
        old_price: 3700.33,
        category: "womens",
      },
      {
        id: 3,
        name:" Western Women's Fashionable and Stylish Tops in Orange Color",
        image: w3_img,
        new_price: 769.99,
        old_price: 1800.33,
        category: "womens",
      },
      {
        id: 4,
        name: "Cbazaar Womens's Short Kurti | Womens Formal Wear",
        image: w4_img,
        new_price: 569.99,
        old_price: 9400.33,
        category: "womens",
      },
      {
        id: 5,
        name: "Devnaagri - Sage Green Hand-Painted Organza Saree",
        image:w5_img,
        new_price: 1999.99,
        old_price: 2400.33,
        category: "womens",
      },
      {
        id: 6,
        name: "African crop Print Top African Print Top Tops for Women | Etsy",
        image:w6_img,
        new_price: 2569.99,
        old_price: 5400.33,
        category: "womens",
      },
      {
        id: 7,
        name: "Green color crop top with skirt and Jacket bridesmaid outfit",
        image: w7_img,
        new_price: 2169.99,
        old_price: 3700.33,
        category: "womens",
        
    },
    {
        id: 8,
        name: "Purple Top Women, Indian Short Kurtis , Purple Evening Top ,",
        image: w8_img,
        new_price: 869.99,
        old_price:  1500.33,
        category: "womens",
    },
    {
        id: 9,
        name:"Men's Online Shopping - Shop from a wide range of mens white with black",
        image: m1_img,
        new_price: 1569.99,
        old_price: 2750.33,
        category: "mens",
    },
    {
        id: 10,
        name:"brown shirt|cream bottom |formals  pant |for mens",
        image:m2_img,
        new_price: 2269.99,
        old_price: 4400.33,
        category:"mens"
    },
    {
        id: 11,     
        name:"Modern and confident young man suit close up",
        image: m3_img,
        new_price: 1469.99,
        old_price: 2470.33,
        category: "mens",
    },
    {
        id: 12,     
        name:"green|cream bottom |formals |for mens",
        image: m4_img,
        new_price: 1469.99,
        old_price: 2470.33,
        category: "mens",
    },
    {
        id: 13,
        name:"purple|cream bottom |formals |for mens",
        image: m5_img,
        new_price: 569.99,
        old_price: 1400.33,
        category: "mens",
    },
    {
        id: 14,
        name:"t-shirt for mens|with round neck|modren design",
        image: m6_img,
        new_price: 569.99,
        old_price: 1400.33,
        category: "mens",
    },
    {
        id: 15,
        name:"t-shirt for mens|with round neck|modren design |black",
        image: m7_img,
        new_price: 769.99,
        old_price: 999.99,
        category: "mens",
    },
    {
        id: 16,
        name:"suit for mens|modren design|classy look ",
        image: m8_img,
        new_price: 569.99,
        old_price: 1400.33,
        category: "mens",
    },
    {
        id: 17,
        name:"doti for mens| design|traditional look ",
        image: m9_img,
        new_price: 2269.99,
        old_price: 4400.73,
        category: "mens",
    },
    {
        id: 18,
        name:"shirt for mens|with round neck|modren design",
        image: m10_img,
        new_price: 669.99,
        old_price: 999,
        category: "mens",
    },
    {
        id:19,
        name:"Royal Blue Flower Girl Dresses for Wedding Girls Party Dress Princess ...",
        image:k1_img,
        new_price:2444,
        old_price:3900,
        category: "kids",
    },
    {
        id:20,
        name:"Shivangi Girls Hakoba Cotton Frock-Orange - Shivangi -",
        image:k2_img,
        new_price:1444,
        old_price:2000,
        category: "kids",
    },
    {
        id:21,
        name:"Buy sleeveless Navy blue short kids dress Frocks Online",
        image:k3_img,
        new_price:1744,
        old_price:3100,
        category: "kids",
    },
    {
        id:22,
        name:"kids dress|zen white top",
        image:k4_img,
        new_price:744,
        old_price:1330,
        category: "kids",
    },
    {
        id:23,
        name:"kid frock |cotten|summery ware",
        image:k5_img,
        new_price:1354,
        old_price:2000,
        category: "kids",

    },
    {
        id:24,
        name:"kid red jakect|and stilysh",
        image:k6_img,
        new_price:2244,
        old_price:3500,
        category: "kids",

    },
    {
        id:25,
        name:"green color suit and boti style",
        image:k7_img,
        new_price:2134.65,
        old_price:5645.88,
        category: "kids",

    },
    {
        id:28,        
        name:"kids dress|and suit |white|blue",
        image:k8_img,
        new_price:1678.99,
        old_price:3456.76,
        category: "kids",

    },
]
export default all_product;