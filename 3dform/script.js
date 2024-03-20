const signUpBtn = document.querySelector(".signup-btn");
const signInBtn = document.querySelector(".signin-btn");
const formsWrapper = document.querySelector(".forms-wrapper");
console.log(signUpBtn)



signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.remove("change");
});

signUpBtn.addEventListener("click", (e) => {
//   e.preventDefault();
  console.log("i am clicked")
  formsWrapper.classList.add("change");
});