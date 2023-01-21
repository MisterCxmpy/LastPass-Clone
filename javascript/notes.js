//#region Modals

var simpleModal = document.getElementById("simple-modal");
var simpleModalBtn = document.getElementById("modal-btn");
var simpleCloseBtn = document.getElementById("close-btn");

simpleModalBtn.addEventListener("click", openSimpleModal);
simpleCloseBtn.addEventListener("click", closeSimpleModal);
window.addEventListener("mousedown", clickOutside);

function openSimpleModal() {
  simpleModal.style.display = "block";
}

function closeSimpleModal() {
  simpleModal.style.display = "none";
  noteName.value = "";
  message.value = "";
}

function closeEditModal() {
  editModal.style.display = "none";
  noteName.value = "";
  message.value = "";
}

function clickOutside(e) {
  if (e.target == (simpleModal || editModal)) {
    noteName.value = "";
    message.value = "";
    simpleModal.style.display = "none";
    editModal.style.display = "none";
  }
}

//#endregion

//#region Variables

var item_list = document.querySelector("#item-list");
var save_item = document.getElementById("save-item");
var updateItem = document.getElementById("update-item");

var noteName = document.querySelector("#name");
var message = document.querySelector("#textBox");

var editNoteName = document.querySelector("#edit-name");
var editMessage = document.querySelector("#edit-textBox");

//#endregion

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

notes = JSON.parse(localStorage.getItem("notes")) || [];

loadNotes();

save_item.addEventListener("click", (e) => {
  e.preventDefault();

  if (noteName.value === "") {
    setError(noteName, "Name is required");
  } else {
    setSuccess(noteName);
  }

  if (message.value === "") {
    setError(message, "Message is required");
  } else {
    setSuccess(message);
  }

  if (message.value !== "" && noteName.value !== "") {
    closeSimpleModal();

    noteData = {
      noteName: noteName.value.trim(),
      message: message.value.trim(),
    };

    notes.push(noteData);

    localStorage.setItem("notes", JSON.stringify(notes));

    loadNotes();

    noteName.value = "";
    message.value = "";
  }
});

function loadNotes() {
  item_list.innerHTML = "";

  notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.forEach((note) => {
    const item_el = document.createElement("div");
    item_el.classList.add("item");

    const item_content = document.createElement("div");
    item_content.classList.add("item-content");

//#region item_text

    const item_text = document.createElement("input");
    item_text.type = "text";
    item_text.id = "item-text";
    item_text.setAttribute("readonly", "readonly");

    item_text.dataset.noteName = note.noteName;
    item_text.dataset.message = note.message;

    item_text.classList.add("item-content");
    item_text.value = note.noteName;

    item_content.appendChild(item_text);

//#endregion

//#region item_actions

    const item_actions = document.createElement("div");
    item_actions.classList.add("item-actions");

    const edit_action = document.createElement("button");
    edit_action.classList.add("edit");
    edit_action.classList.add("fa-solid");
    edit_action.classList.add("fa-pen-to-square");
    edit_action.addEventListener("click", openEditModal);

    const delete_action = document.createElement("button");
    delete_action.classList.add("delete");
    delete_action.classList.add("fa-solid");
    delete_action.classList.add("fa-trash-can-slash");

    delete_action.addEventListener("click", () => {
      notes = notes.filter((i) => i != note);
      localStorage.setItem("notes", JSON.stringify(notes));
      item_list.removeChild(item_el);
    });

    item_actions.appendChild(edit_action);
    item_actions.appendChild(delete_action);

    item_el.appendChild(item_content);
    item_el.appendChild(item_actions);

//#endregion

    item_list.appendChild(item_el);
  });
}

function openEditModal(e) {
  index = getElementIndex(e.target);

  editModal = document.getElementById("edit-modal");
  editModal.style.display = "block";

  input = e.target.parentElement.parentElement.querySelector("#item-text");

  editNoteName.value = input.dataset.noteName;
  editMessage.value = input.dataset.message;

  closeBtn = document.getElementById("edit-close-btn");
  closeBtn.addEventListener("click", closeEditModal);

  updateItem.addEventListener("click", (e) => {
    e.preventDefault();

    newData = {
      noteName: editNoteName.value,
      message: editMessage.value
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
      closeEditModal();

      updateData(e.target, newData);
    }
  });
}

function updateData(e, newData) {
  var data = JSON.parse(localStorage.getItem("notes"));
  data[index] = newData;

  localStorage.setItem("notes", JSON.stringify(data));

  loadNotes();
}

function getElementIndex(element) {
  return Array.from(
    element.parentElement.parentElement.parentElement.childNodes
  ).indexOf(element.parentElement.parentElement);
}