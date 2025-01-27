const Name = "Mostafa";
const Gallery = document.querySelector(".gallery");

let Assets = [
  "../Assets/1.jpg",
  "../Assets/2.jpg",
  "../Assets/3.jpg",
  "/Assets/4.jpg",
  "/Assets/5.jpg",
  "/Assets/6.jpg",
  "/Assets/7.jpg",
  "/Assets/8.jpg",
  "/Assets/9.jpg",
  "/Assets/10.jpg",
];

createimgdiv();

function createimgdiv() {
  for (let i = 0; i <= Assets.length; i++) {
    const containerDev = document.createElement("div");
    const img = document.createElement("img");
    containerDev.appendChild(img);
    Gallery.appendChild(containerDev);
    img.classList.add("rounded-lg");
    containerDev.classList.add("flex", "max-w-lg", "rounded-lg");
    img.src = Assets[i];
  }
}

// chooseAsset();
// function chooseAsset() {
//   for (Asset of Assets) {
//     return (img.src = Asset);
//     console.log(img.src);
//   }
// }
