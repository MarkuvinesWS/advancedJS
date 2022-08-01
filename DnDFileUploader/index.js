const fileInput = document.querySelector('.file-input');
const fileBtn = document.querySelector('.file-btn');
const dndContainer = document.querySelector('#DnDContainer');

fileBtn.addEventListener('click', () => {
  fileInput.click();
})

fileInput.addEventListener('change', (event) => {
  const file =  URL.createObjectURL(event.target.files[0]);
  dndContainer.style.backgroundImage = `url(${file})`;
})

dndContainer.addEventListener('dragover', (event) => {
  event.preventDefault();
});

dndContainer.addEventListener('drop', (event) => {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  const fileBlob =  URL.createObjectURL(file);

  if ([ 'png', 'jpeg', 'jpg'].some((type) => file.type.includes(type))) {
    dndContainer.style.backgroundImage = `url(${fileBlob})`;
    return;
  }
  const fileInfo = { name: file.name, size: file.size };
  const info = document.createElement('p');

  info.style.textAlign = 'center';
  info.innerText = `File name: ${fileInfo.name} \n File size: ${fileInfo.size}`;
  dndContainer.append(info);
})
