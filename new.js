import { getComments, postComments } from "./api.js";
import { renderComments } from "./render.js";

const butttonWriteElement = document.getElementById('add-form-button');
const commentNameElevent = document.getElementById('add-form-name');
const commentTextElement = document.getElementById('add-form-text');
const commentLikeCounterElements = document.querySelectorAll('.likes-counter');
const likebuttonElements = document.querySelectorAll('.like-button');
const commentElement = document.getElementById('add-form')
const elementTextLoad = document.getElementById('loading')
const textElementCount = document.getElementById('text-replacement')

textElementCount.style.display = 'block';

function newLink() {
 
  getComments()
   .then((responseData) => {
      comments = responseData.comments;
      renderComments({comments});
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




// не активная кнопка

const buttonEctiv = () => {
    if (commentNameElevent.value && commentTextElement.value){
    butttonWriteElement.disabled = false;
    } else {
    butttonWriteElement.disabled = true;
    };
  };

renderComments({comments});

butttonWriteElement.addEventListener('click', () => {

//  при загрузки появляется натпись обработка

  commentElement.style.display = 'none';
  elementTextLoad.style.display = 'block';
 
const newPost = () => {
   postComments({
    text:commentTextElement.value,
    name:commentNameElevent.value
  })
  .then(() => {  
    return newLink()
  })
  .then (() => {
    commentElement.style.display = 'flex';
    elementTextLoad.style.display = 'none';
  
    commentNameElevent.value = '';
    commentTextElement.value = '';
  })
  .catch ((error) => {
    commentElement.style.display = 'flex';
    elementTextLoad.style.display = 'none';
    butttonWriteElement.disabled = false;
    alert ('Что-то пошло не так');
    console.warn(error);
    } )
}
newPost();
renderComments({comments});
butttonWriteElement.disabled = true;

  

});
commentNameElevent.addEventListener('input', buttonEctiv);
commentTextElement.addEventListener('input', buttonEctiv);


// архив

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


  // метод trim() не отправляет при пробелах изучить



// ответ на комметарий
   

// enter вместо клика
// const btnEnter = () => {
// document.addEventListener('keyup', (event) => {
//   if ( event.key === 'Enter');  
//   document.querySelector('.add-form-button').click();
// }); 
// };

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