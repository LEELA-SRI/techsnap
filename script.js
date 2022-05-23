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

// document.querySelector('.forum-items').addEventListener('click', function(){
//   this.classList.add('bord')
// })



const follow=document.querySelector('.follow-btn')
const following=document.querySelector('.following-btn')

follow.addEventListener('click', function () {
  following.classList.toggle('d-none')
  follow.classList.toggle('d-none')
})
following.addEventListener('click', function () {
  follow.classList.toggle('d-none')
  following.classList.toggle('d-none')
})

