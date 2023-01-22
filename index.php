<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <title>InfoPass</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="content.css">
  <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.2.1/css/all.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  <script type="text/javascript" src="./node_modules/jquery/dist/jquery.min.js"></script>
  <script>
    $(document).ready(function() {
      target = null
      var trigger = $('.navbar ul li a'),
        container = $('#content')

      trigger.on('click', function() {
        var $this = $(this)
        if (target != $this.data('target')) {
          target = $this.data('target');
        } else {
          return
        };

        container.load(`pages/${target}.php`);

        return false;
      });
    });
  </script>
</head>

<body>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="logo">
        <a href="#" class="nav-link">
          <span class="link-text">InfoPass</span>
          <i class="fa-solid fa-chevrons-right fa-xl"></i>
        </a>
      </li>

      <li class="nav-item">
        <a href="#" data-target="all-items" class="nav-link">
          <i class="fa-solid fa-house fa-xl"></i>
          <span class="link-text">All Items</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="#" data-target="passwords" class="nav-link">
          <i class="fa-solid fa-lock fa-xl"></i>
          <span class="link-text">Passwords</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="#" data-target="notes" class="nav-link">
          <i class="fa-solid fa-notes fa-xl"></i>
          <span class="link-text">Notes</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="#" data-target="addresses" class="nav-link">
          <i class="fa-solid fa-address-book fa-xl"></i>
          <span class="link-text">Addresses</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="#" data-target="credit-cards" class="nav-link">
          <i class="fa-solid fa-credit-card fa-xl"></i>
          <span class="link-text">Credit Cards</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="#" data-target="bank-accounts" class="nav-link">
          <i class="fa-solid fa-building-columns fa-xl"></i>
          <span class="link-text">Bank Accounts</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="#" data-target="settings" class="nav-link">
          <i class="fa-solid fa-gear fa-xl"></i>
          <span class="link-text">Settings</span>
        </a>
      </li>
      </li>
    </ul>
  </nav>

  <main>
    <div id="content">
      <?php include('pages/all-items.php'); ?>
    </div>
  </main>
</body>

</html>