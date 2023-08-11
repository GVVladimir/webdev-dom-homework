import { getComments,  token } from "./api.js";

import { renderComments } from "./render.js";
import { renderStart } from "./renderOld.js";

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

const textElementCount = document.getElementById('text-replacement')


textElementCount.style.display = 'block';

export function newLink() { 

  getComments().then((responseData) => {
      comments = responseData.comments;
    renderStart({ comments })   
      return true;
   })
    .then(() => {
      if(!token){
        renderStart({ comments })
      } else {
        renderComments({ comments })
      }
       
      textElementCount.style.display = 'none'
   })
     
  };
// newLink()

// не активная кнопка



newLink()


export function buttonEctiv ()  {
  const butonWriteElement = document.getElementById('add-form-button');
  const commentNameElevent = document.getElementById('add-form-name');
const commentTextElement = document.getElementById('add-form-text');
    if (commentNameElevent.value && commentTextElement.value){
    butonWriteElement.disabled = false;
    } else {
    butonWriteElement.disabled = true;
    };
  };

