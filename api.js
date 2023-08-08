const host = `https://wedev-api.sky.pro/api/v2/:grishaev-vladimir/comments/`


export let token;

export const setToken = (newToken) => {
  token = newToken;
};

export let name;

export const setNameUser = (newName) => {
  name = newName;
}

export function getComments() {
    return fetch(host,
  {
    method: "GET",
    headers:{
      Authorization:`Bearer ${token}` ,
      }
    })
   .then((response) => {
    return response.json();
   });  
}


export function deleteComments({ id }) {
  return fetch(host + id,
{
  method: "DELETE",
  headers:{
    Authorization:`Bearer ${token}` ,
    }
  })
  
 .then((response) => {
  return response.json();
 });  
}

export function postComments({text, name}) {
   return fetch(host,{
  method: "POST",
  headers:{
    Authorization:`Bearer ${token}` ,
    },
    body: JSON.stringify({    
    text: text,
    name: name,  
    forceError: true,    
  }),
  
})
.then((response) => { 
   if (response.status === 500){
    throw new Error ('Сервер упал')   
  } else {
    return response.json()
  }
})
}

export function login({login, password}) {
  return fetch('https://wedev-api.sky.pro/api/user/login',{
 method: "POST",
 body: JSON.stringify({
   login,
   password,
 }),
}).then((response) => {
  return response.json();
})
}