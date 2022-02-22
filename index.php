<?php include 'includes/top.php';
if (isset($_GET['p'])) {
  switch ($_GET['p']) {
    case 'leaderboard':
      include_once 'pages/leaderboard.php';
      break;
    case 'about':
      include_once 'pages/about.php';
      break;
    case 'home':
      include_once 'pages/index.php';
      break;
    case 'addscore':
      var_dump($_POST);
      if (isset($_POST['hiddenInput']) && isset($_POST['playerName'])) {
        include 'function/dbAdd.php';
        echo dbadd('normal', $_POST['hiddenInput'], $_POST['playerName'], '0');
        echo "done";
      } else {
        echo "notdone";
      }
      break;
    default:
      include 'pages/404.php';
      break;
  }
} else {
  include_once 'pages/index.php';
}
?>

<script src="scripts/script.js"></script>

<?php include 'includes/bottom.php' ?>