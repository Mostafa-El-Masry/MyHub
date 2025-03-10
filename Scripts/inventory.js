const productsUL = document.querySelector(".products");

// creating an array for the products

let productsarray = [
  ["1", "Sink Cover", "100"],
  ["2", "Hair net", "200"],
  ["3", "Shower Cap", "300"],
  //   { index: ["1", "2", "3"] },
  //   { name: ["Sink Cover", "Hair net", "Shower Cap"] },
  //   { qty: ["100", "200", "300"] },
];

// Creating li item with products

productsarray.forEach(([index, product, qty]) => {
  const productDev = document.createElement("dev");
  const productIndex = document.createElement("li");
  const productName = document.createElement("li");
  const productQty = document.createElement("li");

  // index = () => {
  //   let index = 0;
  //   for (let i = 0; i <= productsarray.length; i++) {
  //     index++;
  //   }
  // };

  productIndex.innerText = index;
  productName.innerText = product;
  productQty.innerText = qty;

  productIndex.style.border = "solid #000000";
  productIndex.style.margin = "5px";
  productName.style.border = "solid #000000";
  productName.style.margin = "5px";
  productQty.style.border = "solid #000000";
  productQty.style.margin = "5px";
  productIndex.style.display = "inline";
  productName.style.display = "inline";
  productQty.style.display = "inline";
  productDev.style.display = "block";

  productsUL.append(productDev);

  productDev.append(productIndex);
  productDev.append(productName);
  productDev.append(productQty);
});
