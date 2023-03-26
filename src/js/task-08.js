/* <form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

Обробка відправлення форми form.login - form повинна відбуватися відповідно до події submit.

Під час відправлення форми сторінка не повинна перезавантажуватися.

Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.

Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.

Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset. */

const form = document.querySelector(".login-form");


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    console.log(event.currentTarget)
    if (email.value.trim() === "" || password.value.trim() === "") {
          
        return alert("Шановний(а), будь ласка, обов'язково заповніть всі поля!");
    } else {
         const userData = {
            [email.name]: event.currentTarget.elements.email.value.trim(),
            [password.name]: event.currentTarget.elements.password.value.trim(),  
         };
        console.log(userData);
         
            console.log(`Email: ${email.value}, Password: ${password.value}`);
        event.currentTarget.reset();
    }
    
      
    
}
