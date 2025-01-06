// add the name of each image title here
const imageNames = ["cs.png", "css3.png", "html5.png", "php.png", "python.png", "sql.png"];

const sliderItems = imageNames.concat(imageNames);
const sliders = document.querySelectorAll(".slide-track");

sliders.forEach((slider, index) => {
  slider.innerHTML = ""; // Kosongkan isi slider sebelum menambahkan gambar

  sliderItems.forEach((sliderItem) => {
    const img = document.createElement("img");
    img.src = "Images/assets/" + sliderItem; //path to your folder image
    img.className = "slide-item";
    slider.appendChild(img);
  });
});

// Use the code below if you only want to create one slider

/*
  const sliderItems = imageNames.concat(imageNames);

  const slider = document.getElementById("slide-track");

  sliderItems.forEach((sliderItem) => {
    const img = document.createElement("img");
    img.src = "./assets/" + sliderItem; //path to your folder image
    img.className = "slide-item";
    slider.appendChild(img);
  });
*/