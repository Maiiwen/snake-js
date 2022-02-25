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
      if (isset($_POST['hiddenInput1']) && isset($_POST['hiddenInput2']) && isset($_POST['playerName']) && isset($_POST['hiddenInput3'])) {
        include 'function/dbAdd.php';
        if (dbadd($_POST['hiddenInput3'], $_POST['playerName'], $_POST['hiddenInput1'], $_POST['hiddenInput2']) !== false) {
          header('Location: success');
        };
      } else {
        echo "<br><br><br>ERROR";
      }
      break;
    case 'success':
      include 'pages/success.php';
      break;
    default:
      include 'pages/404.php';
      break;
  }
} else {
  include_once 'pages/index.php';
}
?>



<?php include 'includes/bottom.php' ?>