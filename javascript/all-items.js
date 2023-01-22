//#region Passwords

var passwordContentItemList = document.getElementById("password-content-item-list");
var passwordContentUpdateItem = document.getElementById("password-content-update-item");

var editUrl = document.querySelector("#edit-url");
var editWebsite = document.querySelector("#edit-website");
var editUsername = document.querySelector("#edit-username");
var editPassword = document.querySelector("#edit-password");
var editTextBox = document.querySelector("#edit-textBox");


items = JSON.parse(localStorage.getItem("items")) || [];

loadPasswords();

var setError = (element, message) => {
  const errorDisplay = element.parentElement.querySelector(".error");

  errorDisplay.innerText = message;
  element.parentElement.classList.add("error");
  element.parentElement.classList.remove("success");
};

var setSuccess = (element) => {
  const errorDisplay = element.parentElement.querySelector(".error");

  errorDisplay.innerText = "";
  element.parentElement.classList.remove("error");
  element.parentElement.classList.add("success");
};

function openPasswordEditModal(e) {
  index = getElementIndex(e.target);

  editPasswordModal = document.getElementById("edit-password-modal");
  editPasswordModal.style.display = "block";

  input = e.target.parentElement.parentElement.querySelector("#item-text");

  editUrl.value = input.dataset.url;
  editWebsite.value = input.dataset.website;
  editUsername.value = input.dataset.username;
  editPassword.value = input.dataset.password;
  editTextBox.value = input.dataset.notes;

  closeBtn = document.getElementById("edit-close-btn");
  closeBtn.addEventListener("click", closePasswordEditModal);

  passwordContentUpdateItem.addEventListener("click", (e) => {
    e.preventDefault();

    newData = {
      url: editUrl.value,
      website: editWebsite.value,
      username: editUsername.value,
      password: editPassword.value,
      notes: editTextBox.value,
    };

    var _website = editWebsite.value;
    var _password = editPassword.value;

    if (_website === "") {
      setError(editWebsite, "Website is required");
    } else {
      setSuccess(editWebsite);
    }

    if (_password === "") {
      setError(editPassword, "Password is required");
    } else {
      setSuccess(editPassword);
    }

    if (_website !== "" && _password !== "") {
      closePasswordEditModal();

      updatePasswordData(e.target, newData);
    }
  });
}

function closePasswordEditModal() {
  editPasswordModal.style.display = "none";
}

function clickOutside(e) {
  if (e.target == editPasswordModal) {
    editPasswordModal.style.display = "none";
  }
}

function updatePasswordData(e, newData) {
  var data = JSON.parse(localStorage.getItem("items"));
  data[index] = newData;

  localStorage.setItem("items", JSON.stringify(data));

  loadPasswords();
}

function getElementIndex(element) {
  return Array.from(
    element.parentElement.parentElement.parentElement.childNodes
  ).indexOf(element.parentElement.parentElement);
}

function loadPasswords() {
  passwordContentItemList.innerHTML = "";

  items = JSON.parse(localStorage.getItem("items")) || [];

  items.forEach((item) => {
    const item_el = document.createElement("div");
    item_el.classList.add("item");

    const item_content = document.createElement("div");
    item_content.classList.add("item-content");

    const item_text = document.createElement("input");
    item_text.type = "text";
    item_text.id = "item-text";
    item_text.setAttribute("readonly", "readonly");

    item_text.dataset.url = item.url;
    item_text.dataset.website = item.website;
    item_text.dataset.username = item.username;
    item_text.dataset.password = item.password;
    item_text.dataset.notes = item.notes;

    item_text.classList.add("item-content");
    item_text.value = item.website;

    item_content.appendChild(item_text);

    const item_url = document.createElement("span");
    item_url.id = "item-url";

    if (item.url != "") {
      item_url.classList.add("link")
      const page = item.url;
      item_url.addEventListener('click',function(page){
        return function(){loadPage(page)}
     }(page))
    }

    item_url.textContent = item.url

    item_content.appendChild(item_url)

    const item_actions = document.createElement("div");
    item_actions.classList.add("item-actions");

    const copy_action = document.createElement("button");
    copy_action.classList.add("copy");
    copy_action.classList.add("fa-solid");
    copy_action.classList.add("fa-copy");
    copy_action.addEventListener("click", copyPassword)

    const edit_action = document.createElement("button");
    edit_action.classList.add("edit");
    edit_action.classList.add("fa-solid");
    edit_action.classList.add("fa-pen-to-square");
    edit_action.addEventListener("click", openPasswordEditModal);

    const delete_action = document.createElement("button");
    delete_action.classList.add("delete");
    delete_action.classList.add("fa-solid");
    delete_action.classList.add("fa-trash-can-slash");

    delete_action.addEventListener("click", () => {
      items = items.filter((i) => i != item);
      localStorage.setItem("items", JSON.stringify(items));
      passwordContentItemList.removeChild(item_el);
    });

    item_actions.appendChild(copy_action);
    item_actions.appendChild(edit_action);
    item_actions.appendChild(delete_action);

    item_el.appendChild(item_content);
    item_el.appendChild(item_actions);

    passwordContentItemList.appendChild(item_el);
  });
}

$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

function copyPassword(e) {
  index = getElementIndex(e.target);

  input = e.target.parentElement.parentElement.querySelector("#item-text");

  navigator.clipboard.writeText(input.dataset.password);
}

function loadPage(url) {
  if (url.includes("https://") || url.includes("http://")){
    shell.openExternal(url)
  } else {
    var newUrl = "http://" + url;
    shell.openExternal(newUrl)
  }

  return;
}

//#endregion

