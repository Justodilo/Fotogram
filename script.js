const dialogRef = document.getElementById("PopUpPhoto");
const dialogPic = document.getElementById("dialogImg");
const imgNumber = document.getElementById("imgNumber");
const picDesc = document.getElementById("picDesc");

const grid = document.getElementById("photoGrid");
const imgBtn = grid.children;
let images = [];
let currentIndex = 0;

for (let i = 0; i < imgBtn.length; i++) {
    const img = imgBtn[i].firstElementChild;
    images.push(img);

    img.dataset.index = i ;
}

function showPic(i){
    currentIndex = i;

    dialogPic.src = images[i].src;
    dialogPic.alt = images[i].alt;

    imgNumber.textContent = `${i + 1}/${images.length}`;
    picDesc.textContent = images[i].alt;
}

function nextPic() {
    let next = currentIndex + 1;
    if (next >= images.length) next = 0 ;
    showPic(next);
}

function prevPic() {
    let prev = currentIndex - 1;
    if (prev < 0) prev = images.length - 1 ;
    showPic(prev);
}

function openDialog(btn){
    const img = btn.firstElementChild;
    const i = Number(img.dataset.index);

    showPic(i);
    dialogRef.showModal();
    dialogRef.classList.add("opened");
}

function closeDialog(){
    dialogRef.close();
    dialogRef.classList.remove("opened");
}

function closeOnBackdrop(event){
    if (event.target === event.currentTarget) {
        closeDialog();
    }
}

