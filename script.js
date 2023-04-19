const form = document.querySelector('#form');
const url = document.querySelector('#url');
const result = document.querySelector('#result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  result.value = 'Extracting text...';
  try {
    const response = await fetch(url.value);
    const blob = await response.blob();
    const text = await Tesseract.recognize(blob, { lang: 'eng' });
    result.value = text.data.text;
  } catch (error) {
    result.value = `Error: ${error.message}`;
  }
});
