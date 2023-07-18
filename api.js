export function getComments() {
    return fetch('https://wedev-api.sky.pro/api/v1/:grishaev-vladimir/comments',
  {
    method: "GET",
  })  
   .then((response) => {
    return response.json();
   });  
}

export function postComments({text, name}) {
   return fetch('https://wedev-api.sky.pro/api/v1/:grishaev-vladimir/comments',{
  method: "POST",
  body: JSON.stringify({
    text: text,
    name: name,  
    forceError: true,
  }),
})
.then((response) => { 
  console.log(response);
  if (response.status === 500){
    throw new Error ('Сервер упал')
   
  } else {
    return response.json()
  }
})
}