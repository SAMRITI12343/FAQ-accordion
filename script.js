const second=document.getElementById("second");
const third=document.getElementById("third");
const fourth=document.getElementById("fourth");
const button=document.getElementById("plus");
const button1=document.getElementById("plus-1");
const button2=document.getElementById("plus-2");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const minus=document.getElementById("minus");


second.addEventListener("mouseenter", () => {
    second.style.color = "hsl(292, 42%, 14%);";
});

third.addEventListener("mouseenter", () => {
    third.style.color = "hsl(292, 42%, 14%);";
});

fourth.addEventListener("mouseenter", () => {
    fourth.style.color = "hsl(292, 42%, 14%);";
});

button.addEventListener("click", () => {
  
    answer1.classList.toggle("hidden");
       button.src = answer1.classList.contains("hidden")
        ? "assets/images/icon-plus.svg"
        : "assets/images/icon-minus.svg";

});

button1.addEventListener("click", () => {
    answer2.classList.toggle("hidden");
       button1.src = answer2.classList.contains("hidden")
        ? "assets/images/icon-plus.svg"
        : "assets/images/icon-minus.svg";
});

button2.addEventListener("click", () => {
    answer3.classList.toggle("hidden");
       button2.src = answer3.classList.contains("hidden")
        ? "assets/images/icon-plus.svg"
        : "assets/images/icon-minus.svg";
});