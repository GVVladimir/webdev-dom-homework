const butttonWriteElement = document.getElementById('add-form-button');
const commentsLinkElement = document.getElementById('comments');
const commentNameElevent = document.getElementById('add-form-name');
const commentTextElement = document.getElementById('add-form-text');
const commentLikeCounterElements = document.querySelectorAll('.likes-counter');
const likebuttonElements = document.querySelectorAll('.like-button');
const commentElement = document.getElementById('add-form')
const elementTextLoad = document.getElementById('loading')
const textElementCount = document.getElementById('text-replacement')

textElementCount.style.display = 'block'

function newLink() {
 
  return fetch('https://wedev-api.sky.pro/api/v1/:grishaev-vladimir/comments',
  {
    method: "GET",
  })  
   .then((response) => {
    return response.json();
   })  
   .then((responseData) => {
      comments = responseData.comments;
      renderComments();
    })
    .then(() => {
      textElementCount.style.display = 'none'
     })
  };
newLink()



let comments = [
    // {
    //     name:'Глеб Фокин ',
    //     data: `12.02.22 12:18`,
    //     comment: 'Это будет первый комментарий на этой странице',
    //     likesNum: '3',
    //     isLike: false,
    //     isEdit: true,
    //     button:'Редактировать'
    //     },
    //     {
    //     name:'Варвара Н.',
    //     data: `13.02.22 19:22`,
    //     comment: 'Мне нравится как оформлена эта страница! ❤',
    //     likesNum: '75',
    //     isLike: false,
    //     isEdit: true,
    //     button:'Редактировать'
    //     } 
    
];

// счетчик лайков
const calculLikeSum = () => {
  const likebuttons = document.querySelectorAll('.like-button');
     
  for (const likebutton of likebuttons){
       likebutton.addEventListener('click', (event) => { 
       event.stopPropagation()
         const el =  likebutton.dataset.el;  
 
         if(comments[el].isLiked){  
          comments[el].likes --;
          comments[el].isLiked = false;  
        } else {
          comments[el].likes ++;
          comments[el].isLiked = true;
        }

     renderComments()
       });  
   }; 
};

// смена названия кнопки переписать

// const newNameButton = () => {
//   const nameButtonElements = document.querySelectorAll('.add-form-button');
//   for (const nameButtonElement of nameButtonElements){
//     nameButtonElement.addEventListener('click', (event) => {
//       const el = nameButtonElement.dataset.namebtn;
//        event.stopPropagation()
    
//       if (comments[el].isEdit){
//         comments[el].comment = `<textarea  type="textarea" class='add-form-text data-texta=${el}' rows="4">${comments.comment}</textarea>`;
//         comments[el].isEdit = false;
//         comments[el].button = 'Cохранить'

//         } else if (comments[el].isEdit === false) {
//           comments[el].comment;
//         comments[el].isEdit = true
//         comments[el].button = 'Редактировать'
        
//       }
//         renderComments();
      
//     })
//   }
// }

// не активная кнопка
const buttonEctiv = () => {
    if (commentNameElevent.value && commentTextElement.value){
    butttonWriteElement.disabled = false;
    } else {
    butttonWriteElement.disabled = true;
    };
  };

// ответ на комметарий
   
const answerComment = () => {
  const textComments = document.querySelectorAll('.comment')
    for (const textComment of textComments){
    textComment.addEventListener('click', () => {
      
      const el = textComment.dataset.el;
      commentTextElement.value = `${'>' + ' ' + comments[el].text + '  ' + comments[el].author.name+ ':' + '  '}`;
     
    }) 
  }
}

// enter вместо клика
// const btnEnter = () => {
// document.addEventListener('keyup', (event) => {
//   if ( event.key === 'Enter');  
//   document.querySelector('.add-form-button').click();
// }); 
// };

const renderComments = () => {
    const commentsHtml = comments.map((comment, el) => {
        return `<li data-el="${el}" id="comment" class="comment" >
        
        <div class="comment-header">
          <div>${comment.author.name}</div>
          <div>${new Date().toLocaleDateString().slice(0, 6) + new Date().toLocaleDateString().slice(8) + ' ' + new Date().toLocaleTimeString().slice(0, -3)}</div>
        </div>
        <div data-el="${el}" class="comment-body" >
          <div   class="comment-text">${comment.text}</div>
        </div>
        <div class="comment-footer" >
          <div class="likes">
            <span   class="likes-counter">${comment.likes}</span>
            <button  data-el="${el}" class="like-button ${comment.isLiked ? "-active-like" : ""}"></button>
          </div>
        </div>
      </li>`
    }).join('');
   

    commentsLinkElement.innerHTML = commentsHtml;
    

    calculLikeSum();
    answerComment();
    buttonEctiv();
    // btnEnter();
    
    // newNameButton();
};

renderComments();

butttonWriteElement.addEventListener('click', () => {

  // метод trim() не отправляет при пробелах изучить
   
  //  comments.push({
  //   name:commentNameElevent.value
  //   .replace('<', '&lt')
  //   .replace('>', '&gt'),
  //       data: new Date().toLocaleDateString().slice(0, 6) + new Date().toLocaleDateString().slice(8, 10) + ' ' + new Date().toLocaleTimeString().slice(0, -3),
  //       comment: commentTextElement.value,
  //       likesNum: 0,
  //       isLike: false,
  //       isEdit: true,
  //       button: 'Редактировать'
  //  })


//  при загрузке появляется натпись обработка

  commentElement.style.display = 'none';
  elementTextLoad.style.display = 'block';
  // commentNameElevent.style.display = 'none'

   fetch('https://wedev-api.sky.pro/api/v1/:grishaev-vladimir/comments',{
  method: "POST",
  body: JSON.stringify({
    text: commentTextElement.value,
    name:  commentNameElevent.value,  
  }),
})
.then((response) => { 
  return response.json()
 })
  .then(() => {  
    return newLink()
  })
  .then (() => {
    commentElement.style.display = 'flex';
    elementTextLoad.style.display = 'none';
    // butttonWriteElement.style.display = 'block';
  })
  

renderComments()
butttonWriteElement.disabled = true;

  commentNameElevent.value = '';
  commentTextElement.value = '';

});
commentNameElevent.addEventListener('input', buttonEctiv);
commentTextElement.addEventListener('input', buttonEctiv);