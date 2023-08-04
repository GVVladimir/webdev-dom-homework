import { getComments } from "./api.js";
import { renderLogin } from "./login.js";
import { renderComments } from "./render.js";



// const butttonWriteElement = document.getElementById('add-form-button');
// const commentNameElevent = document.getElementById('add-form-name');
// const commentTextElement = document.getElementById('add-form-text');
// const commentElement = document.getElementById('add-form')
// const elementTextLoad = document.getElementById('loading')
const textElementCount = document.getElementById('text-replacement')

textElementCount.style.display = 'block';

export function newLink() { 

  getComments().then((responseData) => {
      comments = responseData.comments;
      renderComments({comments});
      return true;
   })
    .then(() => {
      renderLogin({ comments, newLink })
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

export function buttonEctiv ()  {
  const butttonWriteElement = document.getElementById('add-form-button');
  const commentNameElevent = document.getElementById('add-form-name');
const commentTextElement = document.getElementById('add-form-text');
    if (commentNameElevent.value && commentTextElement.value){
    butttonWriteElement.disabled = false;
    } else {
    butttonWriteElement.disabled = true;
    };
  };

  

// renderComments({comments});
renderLogin({ newLink });






