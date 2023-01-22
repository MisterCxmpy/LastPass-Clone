<html>

<head>
  <link rel="stylesheet" href="content.css">
</head>

<body>
  <div class="header">
    <h1>All Items</h1>
  </div>
  <hr>
  <div class="sub-header">
    <div id="password-content">
      <h2>Passwords</h2>
      <hr>
      <div id="password-content-item-list" class="add-items">

      </div>

      <div id="edit-password-modal" class="modal">
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

              <button id="password-content-update-item" class="button-5 form-save">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div id="note-content">
      <h2>Notes</h2>
      <hr>

      <div id="note-content-item-list" class="add-items">

      </div>

      <div id="edit-note-modal" class="modal">
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

              <button id="note-content-update-item" class="button-5 form-save">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div id="address-content">
      <h2>Addressess</h2>
      <hr>
    </div>
    <div id="credit-card-content">
      <h2>Credit Cards</h2>
      <hr>
    </div>
    <div id="bank-account-content">
      <h2>Bank Accounts</h2>
      <hr>
    </div>
  </div>

  <script src="./javascript/all-items.js"></script>
</body>

</html>