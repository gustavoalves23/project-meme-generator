const memeText = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');
const imgInput = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const memeContainer = document.getElementById('meme-image-container');

function textWriter() {
  const text = textInput.value;
  memeText.innerText = text;
}

textInput.addEventListener('keyup', textWriter);

function imageAdd(img) {
  const imageUrl = URL.createObjectURL(img.target.files[0]);
  console.log(imageUrl);
  memeImage.src = imageUrl;
  memeContainer.style.width = 'auto';
  memeContainer.style.height = 'auto';
}

imgInput.addEventListener('change', imageAdd);