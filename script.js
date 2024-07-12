function realpic() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}

const fakepic = "https://thispersondoesnotexist.com/";

const imgcontainer = document.getElementById("images");
const resContainer = document.getElementById("result");

function draw() {
  resContainer.innerHTML="";
  imgcontainer.innerHTML="";
  const rnd = Math.random() > 0.5;
  const arr = [rnd, !rnd];

  const resetBtn = document.createElement("button");
  resetBtn.innerHTML ="try again ya man/woman"
  resetBtn.onclick = draw
  for (const isReal of arr) {
    const img = document.createElement("img");
    img.src = isReal ? realpic() : fakepic;
    imgcontainer.append(img);

    img.onclick = function () {
      if (isReal) {
     resContainer.innerHTML ="correct"
      } else {
        resContainer.innerHTML = "Incorrect"
      }
      resContainer.appendChild(resetBtn);
    };
  }
}

draw();
