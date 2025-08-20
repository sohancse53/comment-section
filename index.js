

const like = document.getElementById('like');
const comment = document.getElementById('comment');
const share = document.getElementById('share');
const likeCount = document.getElementById('likeCount');
const commentCount = document.getElementById('commentCount');
const shareCount = document.getElementById('shareCount');

let cntComment = 0;

like.addEventListener('click',function(){

//   console.log(++cnt);
let cntLike = 0;
    likeCount.innerText=++cntLike;
  
})

comment.addEventListener('click',function(){
const input = document.getElementById('input');
const span = document.createElement('span');
span.classList.add('text-lg','px-2', 'bg-gray-600','text-white','mb-2', 'rounded-md')

    const getInput = input.value;
    console.log(getInput);
    commentCount.innerText=++cntComment;
  const newDiv = document.getElementById('newDiv');
  span.innerText = getInput;
  newDiv.appendChild(span);
  newDiv.appendChild(document.createElement('br'));

input.value = "";
})



share.addEventListener('click',function(){

//   console.log(++cnt);
let cntShare = 0;
    shareCount.innerText=++cntShare;
  
})