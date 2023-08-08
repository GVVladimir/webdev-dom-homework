import { login, setNameUser, setToken } from "./api.js";
import { newLink } from "./main.js";
import { renderComments } from "./render.js";




 export const renderLogin = ({ comments }) => {
    const appElement = document.getElementById('app')
    const loginHTML = `
<div class="container" id="enter-container">
    <div id="entrance" class="add-form entrance">
        <h3 class="comment-header">Форма ввода</h3>
        <input id="input-login" class=" logUser" type="text" placeholder="Введите логин">
        <input id="input-password" class=" logUser" type="text" placeholder="Введите пароль">
        <button id="enter-form-button" class="add-form-button">Войти</button>
        <p class ="add-form-registration" id="add-form-registration">Зарегистрироваться</p>
    </div>

    <div id="registration" class="add-form registration" style="display:none;">
        <h3 class="comment-header">Ругистрация</h3>
        <input class=" logUser" type="text" placeholder="Введите имя">
        <input class=" logUser" type="text" placeholder="Введите логин">
        <input class=" logUser" type="text" placeholder="Введите пароль">
        <button class="add-form-button">Зарегистрироваться</button>
        <p class ="add-form-registration" id="add-form-registratio">Войти</p>
    </div>
</div>`;

appElement.innerHTML = loginHTML;

// кнопка войти
const enterButton = document.getElementById('enter-form-button');
// строка логин
const inpunLoginElement = document.getElementById('input-login');
// строка пароль
const inputPasswordElement = document.getElementById('input-password');
// блок войти
const entranceElement = document.getElementById('entrance');
// блок регистрация
const registrtionElement = document.getElementById('registration');
// регистрация сноска
const registrtionClickElement = document.getElementById('add-form-registration');
// вход сноска
const entranceClickElement = document.getElementById('add-form-registratio');


function clickRegistration() {
               
    registrtionClickElement.addEventListener('click',() => {
       
            entranceElement.style.display = 'none';
             registrtionElement.style.display = 'flex';
             
   })
 }
        clickRegistration()

function clickEntrance() {
            
    entranceClickElement.addEventListener('click',() => {
    
        entranceElement.style.display = 'flex';
        registrtionElement.style.display = 'none';
            
})
}
clickEntrance()


    enterButton.addEventListener('click', () => {
        login({
            login: inpunLoginElement.value,
            password:inputPasswordElement.value,
        }).then((responsData) => {
         setToken(responsData.user.token);
        setNameUser(responsData.user.name);

        })
        .then((response) => {
        //  newLink()
        
        renderComments({ comments })
         
        })
        
 });

};