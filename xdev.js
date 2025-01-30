const SlideDev = document.createElement("div");
const gallery = document.querySelector(".gallery");
SlideDev.classList.add("slide", "rounded-lg");
gallery.classList.add("mt-5", "justify-around");

// Array of Assets
let Assets = [
  "background-image: url(/Assets/jpg (2).jpg)",
  "background-iamge: url('/Assets/jpg (52).jpg')",
  "background-iamge: url('/Assets/jpg (53).jpg')",
];

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

Assets.forEach((Assestsrc) => {
  const Itemdev = document.createElement("div");
  Itemdev.classList.add("item");
  Itemdev.setAttribute("style", Assestsrc);
});

SlideDev.appendChild(Itemdev);
gallery.appendChild(SlideDev);

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]); // here the length of items = 6
});
