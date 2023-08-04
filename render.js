import { deleteComments, postComments } from "./api.js";
import { buttonEctiv } from "./main.js";




export const renderComments = ({ comments }) => {
  const appElement = document.getElementById('app');
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
        <button class="add-form-button delete-button" id="add-form-button-delete" >Удалить</button>
          <div class="likes">          
            <span   class="likes-counter">${comment.likes}</span>
            <button  data-el="${el}" class="like-button ${comment.isLiked ? "-active-like" : ""}"></button>
          </div>
        </div>
      </li>`
    }).join('');

    const appHTML = `<div class="container">
    <div id="text-replacement" style="display: none; color: white;">Подождите немного</div>
    <ul id="comments" class="comments">${commentsHtml}
   <!-- рендерится из js -->
    </ul>
    <br>
    <div class = "loading" id="loading" style ="display:none; color:white;">Комментарий добавляется...</div>
    <div class="add-form" id="add-form">
      <input id="add-form-name"
        type="text"
        class="add-form-name"
        placeholder="Введите ваше имя"
      />
      <textarea
        type="textarea"
        class="add-form-text"
        placeholder="Введите ваш коментарий"
        rows="4"
        id="add-form-text"
      ></textarea>
      <div class="add-form-row">
        <button class="add-form-button" id="add-form-button-delete">Удалить</button>
        <button class="add-form-button" id="add-form-button">Написать</button>
      </div>
    </div>
  </div>
    `;
   

appElement.innerHTML = appHTML;
    // счетчик лайков
    function calculLikeSum() {
        const likebuttons = document.querySelectorAll('.like-button');

        for (const likebutton of likebuttons) {
            likebutton.addEventListener('click', (event) => {
                event.stopPropagation();
                const el = likebutton.dataset.el;

                if (comments[el].isLiked) {
                    comments[el].likes--;
                    comments[el].isLiked = false;
                } else {
                    comments[el].likes++;
                    comments[el].isLiked = true;
                }

                renderComments({ comments });
            });
        };
    }
    calculLikeSum();


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
    answerComment();

    const deletButtonElements = document.querySelectorAll(`.delete-button`);
    for(const deletButtonElement of deletButtonElements){
      deletButtonElement.addEventListener('click', (event) => {
        event.stopPropagation();

        const id = deletButtonElement.dataset.id;

        deleteComments({ id }).then(() => {
          renderComments();
        })
        })
      }


      const butttonWriteElement = document.getElementById('add-form-button');
      const commentNameElevent = document.getElementById('add-form-name');
      const commentTextElement = document.getElementById('add-form-text');
      const commentElement = document.getElementById('add-form')
      const elementTextLoad = document.getElementById('loading')
      const commentsLinkElement = document.getElementById('comments');
   
      // const commentTextElement = document.getElementById('add-form-text');
      // // const textElementCount = document.getElementById('text-replacement')
      
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
  buttonEctiv()
  renderComments({comments});
  
  butttonWriteElement.disabled = true;

  
  });
  commentNameElevent.addEventListener('input', buttonEctiv);
  commentTextElement.addEventListener('input', buttonEctiv);

    }
