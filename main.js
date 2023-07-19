import { getComments, postComments } from "./api.js";
import { renderComments } from "./render.js";

const butttonWriteElement = document.getElementById('add-form-button');
const commentNameElevent = document.getElementById('add-form-name');
const commentTextElement = document.getElementById('add-form-text');
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




