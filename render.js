const commentsLinkElement = document.getElementById('comments');

export const renderComments = ({comments}) => {
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
      
           renderComments({comments})
             });  
         }; 
      };
    calculLikeSum();

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
   
    // btnEnter();
    
    // newNameButton();
};