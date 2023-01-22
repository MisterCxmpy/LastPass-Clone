<html>

<head>
  <link rel="stylesheet" href="content.css">
</head>

<body>
  <div class="header">
    <h1>Notes</h1>
    <button id="modal-btn" class="button-5">Add New</button>
  </div>
  <hr>
  <div id="item-list" class="add-items">

  </div>

  <div id="simple-modal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <span id="close-btn" class="close-btn">&times;</span>
        <h2 id="modal-header">Add Note</h2>
      </div>
      <div class="modal-body">
        <form>
          <div class="input-group">
            <label for="name">Name: <span style="color: red">*</span></label>
            <input type="text" id="name">
            <div class="error"></div>
          </div>

          <div class="input-group">
            <label for="textBox">Message: <span style="color: red">*</span></label>
            <textarea id="textBox" style="height: 120px;"></textarea>
            <div class="error"></div>
          </div>

          <button id="save-item" class="button-5 form-save">Save</button>
        </form>
      </div>
    </div>
  </div>

  <div id="edit-modal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <span id="edit-close-btn" class="close-btn">&times;</span>
        <h2 id="modal-header">Edit Note</h2>
      </div>
      <div class="modal-body">
        <form>
          <div class="input-group">
            <label for="edit-name">Name: <span style="color: red">*</span></label>
            <input type="text" id="edit-name">
            <div class="error"></div>
          </div>

          <div class="input-group">
            <label for="edit-textBox">Message: <span style="color: red">*</span></label>
            <textarea id="edit-textBox" style="height: 120px;"></textarea>
            <div class="error"></div>
          </div>

          <button id="update-item" class="button-5 form-save">Save</button>
        </form>
      </div>
    </div>
  </div>

  <script src="./javascript/notes.js"></script>
</body>

</html>