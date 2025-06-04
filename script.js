const sliderImages = [
  "IMAGE/1.jpg",
  "IMAGE/2.jpg",
];

const sliderTrack = document.getElementById('slider-track');

function createSliderImages() {
  sliderImages.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = "Slider Image";
    img.classList.add('slider-img');
    sliderTrack.appendChild(img);
  });
}

function createRewardGrid() {
  const rewardGrid = document.getElementById("reward-grid");
  for (let i = 1; i <= 12; i++) {
    const cell = document.createElement("div");
    cell.classList.add("reward-cell");

    const img = document.createElement("img");
    img.src = `IMAGE/reward${i}.jpg`;
    img.alt = `item ${i}`;

    const btn = document.createElement("button");
    btn.innerText = "Collect";
    btn.className = "collect-btn";
    btn.onclick = () => alert(`Reward ${i} collected!`);

    cell.appendChild(img);
    cell.appendChild(btn);
    rewardGrid.appendChild(cell);
  }
}

createSliderImages();
createRewardGrid();
