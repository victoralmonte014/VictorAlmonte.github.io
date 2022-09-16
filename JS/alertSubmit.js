let btn = document.getElementById("submit");
var nameForm = document.getElementById("name");
let email = document.getElementById("email");
let textarea = document.getElementById("textarea");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (nameForm.value === "") {
    return alert("the text field name is empty");
  }
  if (email.value === "") {
    return alert("the text field email is empty");
  }
  if (textarea.value === "") {
    return alert("the text field textarea is empty");
  }

  return alert("Your massege haved send !!");
});
