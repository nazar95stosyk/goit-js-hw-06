const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    if (event.currentTarget.email.value === '' || event.currentTarget.password.value === '') {
       return alert('Всі поля повинні бути заповнені!');
    }
    const { email, password } = event.currentTarget.elements;
    const info = {
        email: email.value,
        password:password.value,
    }
    console.log(info);
})

