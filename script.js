const dialogRef = document.getElementById("PopUpPhoto");
const dialogPic = document.getElementById("dialogImg");
const imgNumber = document.getElementById("imgNumber");
const picDesc = document.getElementById("picDesc");

const grid = document.getElementById("photoGrid");
const images = Array.from(grid.children);

let currentIndex = 0 ;

function showPic(i){
    currentIndex = i;

    dialogPic.src = images[currentIndex].src;
    dialogPic.alt = images[currentIndex].alt;

    imgNumber.textContent = `${currentIndex + 1}/${images.length}`;
    picDesc.textContent = images[currentIndex].alt;
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

function openDialog(i){
    showPic(i);
    dialogRef.showModal();
    dialogRef.classList.add("opened");
}

function closeDialog(){
    dialogRef.close();
    dialogRef.classList.remove("opened");
}

