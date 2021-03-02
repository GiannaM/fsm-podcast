

const submit = document.getElementById("requestAccess");
const error = document.getElementById("error");

console.log(error);

submit.addEventListener("click", ev => {
    ev.preventDefault();

    const email = document.getElementById("email");
    // console.log(ev.target.value);
    // console.log(email);

    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(mailFormat);

    console.log(email.value);

    if (mailFormat.test(email.value ))  {
       // console.log(true);
        error.style.display = "none";
        document.getElementById("requestAccess").submit;
    } else {   
       // console.log(false); 
        error.style.display = "block";
        // alert("You have entered an invalid email address!")
        // return (false)
    }
});
