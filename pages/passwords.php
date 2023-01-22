<html>

<body>
  <div class="header">
    <h1>Passwords</h1>
    <button id="modal-btn" class="button-5">Add New</button>
  </div>
  <hr>

  <div id="item-list" class="add-items">

  </div>

  <div id="simple-modal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <span id="close-btn" class="close-btn">&times;</span>
        <h2 id="modal-header">Add password</h2>
      </div>
      <div class="modal-body">
        <form>
          <div class="input-group">
            <label for="url">URL (https://example.com):</label>
            <input type="text" id="url">
          </div>

          <div class="input-group">
            <label for="website">Website: <span style="color: red">*</span></label>
            <input type="text" id="website">
            <div class="error"></div>
          </div>

          <div class="row">
            <div class="input-group">
              <label for="username">Username/Email:</label>
              <input type="text" id="username">
            </div>

            <div class="input-group">
              <label for="password">Password: <span style="color: red">*</span></label>
              <input type="password" id="password">
              <span toggle="#password" class="fa fa-fw fa-eye field-icon toggle-password"></span>
              <div class="error"></div>
            </div>
          </div>

          <div class="input-group">
            <label for="textBox">Notes:</label>
            <textarea id="textBox" style="height: 120px;"></textarea>
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
        <h2 id="modal-header">Edit password</h2>
      </div>
      <div class="modal-body">
        <form>
          <div class="input-group">
            <label for="edit-url">URL (https://example.com):</label>
            <input type="text" id="edit-url">
          </div>

          <div class="input-group">
            <label for="edit-website">Website: <span style="color: red">*</span></label>
            <input type="text" id="edit-website">
            <div class="error"></div>
          </div>

          <div class="row">
            <div class="input-group">
              <label for="edit-username">Username/Email:</label>
              <input type="text" id="edit-username">
            </div>

            <div class="input-group">
              <label for="edit-password">Password: <span style="color: red">*</span></label>
              <input type="password" id="edit-password">
              <span toggle="#edit-password" class="fa fa-fw fa-eye field-icon toggle-password"></span>
              <div class="error"></div>
            </div>
          </div>

          <div class="input-group">
            <label for="edit-textBox">Notes:</label>
            <textarea id="edit-textBox" style="height: 120px;"></textarea>
          </div>

          <button id="update-item" class="button-5 form-save">Save</button>
        </form>
      </div>
    </div>
  </div>

  <script src="./javascript/password.js"></script>
</body>

</html>