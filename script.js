const replyBtn = document.querySelectorAll('.reply')
const commentArea = document.querySelectorAll('.testing')

for (let i = 0; i < replyBtn.length; i++) {
  replyBtn[i].addEventListener('click', function () {
    commentArea[i].classList.toggle('d-none')
  })
}

const profImg = document.querySelectorAll('.hov-elt')


const profBox = document.querySelectorAll('.profile-box')

for (let i = 0; i < profImg.length; i++) {
  profImg[i].addEventListener('click', function () {
    profBox[i].classList.toggle('d-none')

})}

const icon=document.querySelectorAll('.fa')
for (let i=0;i<icon.length;i++){
    icon[i].addEventListener('click', function(){
        icon[i].classList.toggle('icon-color')
    })
}



ClassicEditor.create(document.querySelector("#editor")).catch((error) => {
    console.error(error);
  });
