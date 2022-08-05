const fileInput = document.querySelector('.file-input');
const fileBtn = document.querySelector('.file-btn');
const dndContainer = document.querySelector('#DnDContainer');

document.body.addEventListener('dragover', (event) => {
  event.preventDefault();
} )
document.body.addEventListener('drop', (event) => {
  event.stopImmediatePropagation();
} )

fileBtn.addEventListener('click', () => {
  fileInput.click();
})

function isFileAnImage(file) {
  return ['png', 'jpeg', 'jpg'].some((type) => file.type.includes(type));

}
function fileHandler(file) {
  dndContainer.style.backgroundImage = `none`;
  document.querySelector('.file-info')?.remove();
  const info = document.createElement('p');
  info.classList.add('file-info');
  if (isFileAnImage(file)) {
    const fileBlob =  URL.createObjectURL(file);
    dndContainer.style.backgroundImage = `url(${fileBlob})`;
    return;
  }
  const fileInfo = { name: file.name, size: file.size };

  info.style.textAlign = 'center';
  info.innerText = `File name: ${fileInfo.name} \n File size: ${fileInfo.size}`;
  dndContainer.append(info);
}

fileInput.addEventListener('change', (event) => {
  const file =  event.target.files[0];
  fileHandler(file);
})

dndContainer.addEventListener('dragover', (event) => {
  event.preventDefault();
});

dndContainer.addEventListener('drop', (event) => {
  event.preventDefault();
  console.log(event.target !== dndContainer)
  if (event.target !== dndContainer) {
    return;
  }
  const file = event.dataTransfer.files[0];
  fileHandler(file);
})
