import { renderLogin } from "./login.js";



 export const renderStart = ({ comments }) => {
  
    const appElement = document.getElementById('app')
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
      <button data-id="${comment.id}" class="add-form-button delete-button" id="add-form-delete" >Удалить</button>
        <div class="likes">          
          <span   class="likes-counter">${comment.likes}</span>
          <button  data-el="${el}" class="like-button ${comment.isLiked ? "-active-like" : ""}"></button>
        </div>
      </div>
    </li>`
  }).join('');
    
  
  const appHTML = `<div class="container"><ul id="comments" class="comments">${commentsHtml}
   </ul>
   <br>
   <div>Что бы добавить  коментарий, <a class="link-enter" id="link-enter">авторизуйтесь</a> </div></div>`

   appElement.innerHTML = appHTML;

   const linkAuthorization = document.querySelector('#link-enter');
   linkAuthorization.addEventListener('click', () => {
    
     renderLogin({comments})

   });
} 

