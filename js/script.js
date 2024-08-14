let form = document.querySelector(".form");
let formHeight = document.querySelector(".form__height");
let formWeight = document.querySelector(".form__weight");
let formResult = document.querySelector(".form__result");
let formDescription = document.querySelector(".form__description");

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    let result = formWeight.value / (formHeight.value /100)**2;
    formResult.innerText = result.toFixed(2);
    if (result < 20) {
        formDescription.innerText = "Chudzinka."
    } else if (result >= 20 && result < 25) {
        formDescription.innerText = "Jesteś w normie!"
    } else if (result >= 25 && result < 30) {
        formDescription.innerText = "Troszkę więcej ciała do kochania."
    } else if (result >= 30 && result < 40) {
        formDescription.innerText = "Ups! - I stopień otyłości."
    } else {
        formDescription.innerText = "Uwaga, to groźne dla zdrowia :( - II stopień otyłości."
    };
});
