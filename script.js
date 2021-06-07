const memeText = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');
const imgInput = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const memeContainer = document.getElementById('meme-image-container');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const butttonEarth = document.getElementById('earth');
const sampleMeme1 = document.getElementById('meme-1');
const sampleMeme2 = document.getElementById('meme-2');
const sampleMeme3 = document.getElementById('meme-3');
const sampleMeme4 = document.getElementById('meme-4');

function textWriter() {
  const text = textInput.value;
  memeText.innerText = text;
}

textInput.addEventListener('keyup', textWriter);

function imageAdd(img) {
  const imageUrl = URL.createObjectURL(img.target.files[0]);
  memeImage.style.width = '500px';
  memeImage.style.height = '500px';
  memeImage.src = imageUrl;
}

imgInput.addEventListener('change', imageAdd);

function borderChanger(pressedButton) {
const button = pressedButton.target;
if (button === buttonFire){
  memeContainer.style.border = '3px dashed red';
}
if (button === buttonWater){
  memeContainer.style.border = '5px double blue';
}
if (button === butttonEarth){
  memeContainer.style.border = '6px groove green';
}
}

buttonFire.addEventListener('click', borderChanger);
buttonWater.addEventListener('click', borderChanger);
butttonEarth.addEventListener('click', borderChanger);

function sampleImages(sampleImage) {
  const image = sampleImage.target;
  memeImage.src = image.src;
  memeImage.style.width = '500px';
  memeImage.style.height = '500px';
}

sampleMeme1.addEventListener('click', sampleImages);
sampleMeme2.addEventListener('click', sampleImages);
sampleMeme3.addEventListener('click', sampleImages);
sampleMeme4.addEventListener('click', sampleImages);