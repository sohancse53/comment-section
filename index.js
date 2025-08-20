const like = document.getElementById('like');
const comment = document.getElementById('comment');
const share = document.getElementById('share');
const likeCount = document.getElementById('likeCount');
const commentCount = document.getElementById('commentCount');
const shareCount = document.getElementById('shareCount');

let cntLike = 0;
let cntComment = 0;
let cntShare = 0;

like.addEventListener('click', function () {
    likeCount.innerText = ++cntLike;
});

comment.addEventListener('click', function () {
    const input = document.getElementById('input');
    const getInput = input.value.trim();

    if (getInput) {
        const span = document.createElement('span');
        span.classList.add(
            'text-lg',
            'px-2',
            'bg-gray-600',
            'text-white',
            'mb-2',
            'rounded-md'
        );

        span.innerText = getInput;

        const newDiv = document.getElementById('newDiv');
        newDiv.appendChild(span);
        newDiv.appendChild(document.createElement('br'));

        commentCount.innerText = ++cntComment;

        input.value = "";
    }
});

share.addEventListener('click', function () {
    shareCount.innerText = ++cntShare;
});


document.getElementById("newDiv").addEventListener("click", function (event) {
    if (event.target.tagName === "SPAN") {
        event.target.remove();
    }
});
