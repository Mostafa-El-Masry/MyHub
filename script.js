const Name = "Mostafa";

let videos = [
  "../../../../Assets/Porn/Abbey Rain - Don’t Tell My Manager!.mp4",
  "../../../../Assets/Porn/Abbey Rain - Don’t Tell My Manager!.mp4",
  "../../../../Assets/Porn/Abbey Rain - Don’t Tell My Manager!.mp4",
];

const Gallery = document.querySelector(".gallery");

// alert("hello " + Name);
function Main() {
  this.video = document.createElement("video");
  this.video.controls = true;
  this.video.autoplay = true;
  this.video.loop = true;
  this.video.muted = true;

  this.source1 = document.createElement("source");
  this.source1.setAttribute("src", "E:/Porn/1.mp4");
  this.source1.setAttribute("type", "video/mp4");

  this.video.classList.add("rounded-lg");

  this.video.appendChild(this.source1);

  Gallery.appendChild(this.video);
}

var main = new Main();
