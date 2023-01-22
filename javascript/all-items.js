//#region Error Checks

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

//#endregion

//#region Passwords

var passwordContentItemList = document.getElementById(
  "password-content-item-list"
);
var passwordContentUpdateItem = document.getElementById(
  "password-content-update-item"
);

var editUrl = document.querySelector("#edit-url");
var editWebsite = document.querySelector("#edit-website");
var editUsername = document.querySelector("#edit-username");
var editPassword = document.querySelector("#edit-password");
var editTextBox = document.querySelector("#edit-textBox");

items = JSON.parse(localStorage.getItem("items")) || [];

loadPasswords();

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

  closeBtn = document.getElementById("edit--password-close-btn");
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

function updatePasswordData(e, newData) {
  var data = JSON.parse(localStorage.getItem("items"));
  data[index] = newData;

  localStorage.setItem("items", JSON.stringify(data));

  loadPasswords();
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
      item_url.classList.add("link");
      const page = item.url;
      item_url.addEventListener(
        "click",
        (function (page) {
          return function () {
            loadPage(page);
          };
        })(page)
      );
    }

    item_url.textContent = item.url;

    item_content.appendChild(item_url);

    const item_actions = document.createElement("div");
    item_actions.classList.add("item-actions");

    const copy_action = document.createElement("button");
    copy_action.classList.add("copy");
    copy_action.classList.add("fa-solid");
    copy_action.classList.add("fa-copy");
    copy_action.addEventListener("click", copyPassword);

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

$(".toggle-password").click(function () {
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
  if (url.includes("https://") || url.includes("http://")) {
    shell.openExternal(url);
  } else {
    var newUrl = "http://" + url;
    shell.openExternal(newUrl);
  }

  return;
}

//#endregion

//#region Notes

var noteContentItemList = document.getElementById("note-content-item-list");
var noteContentUpdateItem = document.getElementById("note-content-update-item");

var editNoteName = document.querySelector("#edit-note-name");
var editMessage = document.querySelector("#edit-note-textBox");

notes = JSON.parse(localStorage.getItem("notes")) || [];

loadNotes();

function openNoteEditModal(e) {
  index = getElementIndex(e.target);

  editNoteModal = document.getElementById("edit-note-modal");
  editNoteModal.style.display = "block";

  input = e.target.parentElement.parentElement.querySelector("#item-text");

  editNoteName.value = input.dataset.noteName;
  editMessage.value = input.dataset.message;

  closeBtn = document.getElementById("edit-note-close-btn");
  closeBtn.addEventListener("click", closeNoteEditModal);

  noteContentUpdateItem.addEventListener("click", (e) => {
    e.preventDefault();

    newData = {
      noteName: editNoteName.value,
      message: editMessage.value,
    };

    if (editNoteName.value === "") {
      setError(editNoteName, "Name is required");
    } else {
      setSuccess(editNoteName);
    }

    if (editMessage.value === "") {
      setError(editMessage, "Message is required");
    } else {
      setSuccess(editMessage);
    }

    if (editNoteName.value !== "" && editMessage.value !== "") {
      closeNoteEditModal();

      updateNoteData(e.target, newData);
    }
  });
}

function closeNoteEditModal() {
  editNoteModal.style.display = "none";
}

function updateNoteData(e, newData) {
  var data = JSON.parse(localStorage.getItem("notes"));
  data[index] = newData;

  localStorage.setItem("notes", JSON.stringify(data));

  loadNotes();
}

function loadNotes() {
  noteContentItemList.innerHTML = "";

  notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.forEach((note) => {
    const item_el = document.createElement("div");
    item_el.classList.add("item");

    const item_content = document.createElement("div");
    item_content.classList.add("item-content");

    const item_text = document.createElement("input");
    item_text.type = "text";
    item_text.id = "item-text";
    item_text.setAttribute("readonly", "readonly");

    item_text.dataset.noteName = note.noteName;
    item_text.dataset.message = note.message;

    item_text.classList.add("item-content");
    item_text.value = note.noteName;

    item_content.appendChild(item_text);

    const item_actions = document.createElement("div");
    item_actions.classList.add("item-actions");

    const edit_action = document.createElement("button");
    edit_action.classList.add("edit");
    edit_action.classList.add("fa-solid");
    edit_action.classList.add("fa-pen-to-square");
    edit_action.addEventListener("click", openNoteEditModal);

    const delete_action = document.createElement("button");
    delete_action.classList.add("delete");
    delete_action.classList.add("fa-solid");
    delete_action.classList.add("fa-trash-can-slash");

    delete_action.addEventListener("click", () => {
      notes = notes.filter((i) => i != note);
      localStorage.setItem("notes", JSON.stringify(notes));
      noteContentItemList.removeChild(item_el);
    });

    item_actions.appendChild(edit_action);
    item_actions.appendChild(delete_action);

    item_el.appendChild(item_content);
    item_el.appendChild(item_actions);

    noteContentItemList.appendChild(item_el);
  });
}

//#endregion

function clickOutside(e) {
  if (e.target == editPasswordModal) {
    editPasswordModal.style.display = "none";
    editNoteModal.style.display = "none";
  }
}

function getElementIndex(element) {
  return Array.from(
    element.parentElement.parentElement.parentElement.childNodes
  ).indexOf(element.parentElement.parentElement);
}
