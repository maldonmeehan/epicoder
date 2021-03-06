// playerObject
function Player(name) {
  this.playerName = name;
  this.playerFocus = 100;
  this.playerTime = 90;
  this.playerMoney = 10;
  this.playerScore = 0;
}

Player.prototype.calculateFocus = function (focus) {
  return this.playerFocus -= focus;
}

Player.prototype.calculateTime = function (time) {
  return this.playerTime -= time;
}

Player.prototype.calculateMoney = function (money) {
  return this.playerMoney -= money;
}

Player.prototype.calculateScore = function () {
  return this.playerScore = this.playerFocus + (this.playerMoney*10) + (this.playerTime*10);
  console.log(this.PlayerScore);
}

// high scores

var highScores = [];

var highScoreGenerator = function(playerScore) {
  highScores.push(playerScore);
  highScores.sort(sortHighToLow);
  function sortHighToLow(a, b) {
    return a - b;
  }
  return highScores;
}

// updateScoreboard
function updateScoreboard (name, focus, time, money) {
  $(".user-name").text(newPlayer.playerName);
  var f = newPlayer.playerFocus;
  $(".scoreboard-focus").text(f + "%");
  var t = newPlayer.playerTime;
  var hours = Math.floor(t / 60);
  var minutes = t % 60;
  $(".scoreboard-time").text(hours + " hour & " + minutes + " minutes");
  var money = newPlayer.playerMoney.toFixed(2);
  $(".scoreboard-money").text("$" + money);
}

function loserDetector () {
  if (newPlayer.playerFocus <= 0) {
    $("#question-pages").hide();
    newPlayer.playerTime = 0;
    updateScoreboard();
    $("#focus-loser").show();
  } else if (newPlayer.playerTime <= 0) {
    $("#question-pages").hide();
    newPlayer.playerTime = 0;
    updateScoreboard();
    $("#time-loser").show();
  } else if (newPlayer.playerMoney <=0) {
    $("#question-pages").hide();
    newPlayer.playerTime = 0;
    updateScoreboard();
    $("#money-loser").show();
  }
}

$(document).ready(function() {
//landing page
  $("form#get-user-name").submit(function(event){
    event.preventDefault();
    var name = $("#new-user-name").val(); // initialize new player
    newPlayer = new Player(name);
    updateScoreboard();     // on button submit
    $("#landing-page").hide();
    $("#instruction-page").show();

//instruction page
  $("#go-to-10a").click(function(event){
    event.preventDefault();
    $("#instruction-page").hide();
    $("#page-10a").show();
    $("#scoreboard-header").show();
  });

//page 10a
  $("#go-to-11a").click(function(event){
    event.preventDefault();
    $("#page-10a").hide();
    $("#page-11a").show();
  });

//page 11a
  $("#go-to-12a").click(function(event){
    event.preventDefault();
    var focus = parseInt($("#page-11a-form input:radio[name=focus]:checked").val());
    newPlayer.calculateFocus(focus);

    updateScoreboard();
    $("#page-11a").hide();
    $("#page-12a-update").text(focus);
    $("#page-12a").show();
  });

//page 12a
  $("#go-to-13a").click(function(event){
    event.preventDefault();
    var time = parseInt($("#page-12a-form input:radio[name=time]:checked").val());
    newPlayer.calculateTime(time);
    updateScoreboard();
    $("#page-12a").hide();
    $("#page-13a-update").text(time);
    $("#page-13a").show();
  });

//page 13a
  $("#go-to-20a").click(function(event){
    event.preventDefault();
    var money = parseInt($("#page-13a-form input:radio[name=money]:checked").val());
    newPlayer.calculateMoney(money);
    newPlayer.playerTime -= 20;
    updateScoreboard();
    loserDetector();
    $("#page-13a").hide();
    $("#page-20a-update").text(money);
    $("#page-20a").show();
  });

//page 20a (branching page)
  $("#go-to-30a").click(function(event){
    event.preventDefault();
    $("#page-20a").hide();
    newPlayer.playerTime -= 20;
    updateScoreboard();
    $("#page-30a").show();
  });

  $("#go-to-30b").click(function(event){
    event.preventDefault();
    $("#page-20a").hide();
    newPlayer.playerTime -= 30;
    updateScoreboard();
    $("#page-30b").show();
  });

//page 30a
  $("#go-to-31a").click(function(event){
    event.preventDefault();
    $("#page-30a").hide();
    $("#page-31a").show();
  });

//page 31a
  $("#go-to-32a").click(function(event){
    event.preventDefault();
    var money = parseInt($("#page-31a-form input:radio[name=money]:checked").val());
    newPlayer.calculateMoney(money);

    updateScoreboard();
    loserDetector();
    $("#page-31a").hide();
    $("#page-32a-update").text(money);
    $("#page-32a").show();
  });

//page 32a
  $("#go-to-33a").click(function(event){
    event.preventDefault();
    var focus = parseInt($("#page-32a-form input:radio[name=focus]:checked").val());
    newPlayer.calculateFocus(focus);

    updateScoreboard();
    loserDetector();
    $("#page-32a").hide();
    $("#page-33a-update").text(focus);
    $("#page-33a").show();
  });

//page 33a
  $("#33a-go-to-40a").click(function(event){
    event.preventDefault();
    var time = parseInt($("#page-33a-form input:radio[name=time]:checked").val());
    newPlayer.calculateTime(time);

    updateScoreboard();
    loserDetector();
    $("#page-33a").hide();
    $("#page-40a-update").text(time);
    $("#page-40a").show();
  });

//page 30b
  $("#go-to-31b").click(function(event){
    event.preventDefault();
    $("#page-30b").hide();
    $("#page-31b").show();
  });

//page 31b
  $("#go-to-32b").click(function(event){
    event.preventDefault();
    var focus = parseInt($("#page-31b-form input:radio[name=focus]:checked").val());
    newPlayer.calculateFocus(focus);

    updateScoreboard();
    loserDetector();
    $("#page-31b").hide();
    $("#page-32b-update").text(focus);
    $("#page-32b").show();
  });

//page 32b
  $("#go-to-33b").click(function(event){
    event.preventDefault();
    var money = parseInt($("#page-32b-form input:radio[name=money]:checked").val());
    newPlayer.calculateMoney(money);

    updateScoreboard();
    loserDetector();
    $("#page-32b").hide();
    $("#page-33b-update").text(money);
    $("#page-33b").show();
  });

//page 33b
  $("#33b-go-to-40a").click(function(event){
    event.preventDefault();
    var time = parseInt($("#page-33b-form input:radio[name=time]:checked").val());
    newPlayer.calculateTime(time);

    updateScoreboard();
    loserDetector();
    $("#page-33b").hide();
    $("#page-40a-update").text(time);
    $("#page-40a").show();
  });

//page 40a (branching page)
  $("#go-to-50a").click(function(event){
    event.preventDefault();
    $("#page-40a").hide();
    newPlayer.playerTime -= 2;
    updateScoreboard();
    $("#page-50a").show();
  });

  $("#go-to-50b").click(function(event){
    event.preventDefault();
    $("#page-40a").hide();
    newPlayer.playerTime -= 5;
    updateScoreboard();
    $("#page-50b").show();
  });

//page 50a
  $("#go-to-51a").click(function(event){
    event.preventDefault();
    updateScoreboard();
    $("#page-50a").hide();
    $("#page-51a").show();
  });

//page 51a
  $("#go-to-52a").click(function(event){
    event.preventDefault();
    var money = parseInt($("#page-51a-form input:radio[name=money]:checked").val());
    newPlayer.calculateMoney(money);

    updateScoreboard();
    loserDetector();
    $("#page-51a").hide();
    $("#page-52a-update").text(money);
    $("#page-52a").show();
  });

//page 52a
  $("#go-to-53a").click(function(event){
    event.preventDefault();
    var time = parseInt($("#page-52a-form input:radio[name=time]:checked").val());
    newPlayer.calculateTime(time);

    updateScoreboard();
    loserDetector();
    $("#page-52a").hide();
    $("#page-53a-update").text(time);
    $("#page-53a").show();
  });

//page 53a
  $("#53a-go-to-60a").click(function(event){
    event.preventDefault();
    var focus = parseInt($("#page-53a-form input:radio[name=focus]:checked").val());
    newPlayer.calculateFocus(focus);

    updateScoreboard();
    loserDetector();
    $("#page-53a").hide();
    $("#page-60a-update").text(focus);
    $("#page-60a").show();
  });

//page 50b
  $("#go-to-51b").click(function(event){
    event.preventDefault();
    $("#page-50b").hide();
    $("#page-51b").show();
  });

//page 51b
  $("#go-to-52b").click(function(event){
    event.preventDefault();
    var money = parseInt($("#page-51b-form input:radio[name=money]:checked").val());
    newPlayer.calculateMoney(money);

    updateScoreboard();
    loserDetector();
    $("#page-51b").hide();
    $("#page-52b-update").text(money);
    $("#page-52b").show();
  });

//page 52b
  $("#go-to-53b").click(function(event){
    event.preventDefault();
    var time = parseInt($("#page-52b-form input:radio[name=time]:checked").val());
    newPlayer.calculateTime(time);

    updateScoreboard();
    loserDetector();
    $("#page-52b").hide();
    $("#page-53b-update").text(time);
    $("#page-53b").show();
  });

//page 53b
  $("#53b-go-to-60a").click(function(event){
    event.preventDefault();
    var focus = parseInt($("#page-53b-form input:radio[name=focus]:checked").val());
    newPlayer.calculateFocus(focus);

    updateScoreboard();
    loserDetector();
    $("#page-53b").hide();
    $("#page-60a-update").text(focus);
    $("#page-60a").show();
  });

//page 60a
  $("#go-to-61a").click(function(event){
    event.preventDefault();
    $("#page-60a").hide();
    $("#page-61a").show();
  });

//page 61a
  $("#go-to-62a").click(function(event){
    event.preventDefault();
    var focus = parseInt($("#page-61a-form input:radio[name=focus]:checked").val());
    newPlayer.calculateFocus(focus);

    updateScoreboard();
    loserDetector();
    $("#page-61a").hide();
    $("#page-62a-update").text(focus);
    $("#page-62a").show();
  });

//page 62a
  $("#go-to-63a").click(function(event){
    event.preventDefault();
    var time = parseInt($("#page-62a-form input:radio[name=time]:checked").val());
    newPlayer.calculateTime(time);

    updateScoreboard();
    loserDetector();
    $("#page-62a").hide();
    $("#page-63a-update").text(time);
    $("#page-63a").show();
  });

//page 63a
  $("#go-to-70a").click(function(event){
    event.preventDefault();
    var money = parseInt($("#page-63a-form input:radio[name=money]:checked").val());
    newPlayer.calculateMoney(money);
    newPlayer.playerTime -= 5;
    updateScoreboard();
    loserDetector();
    $("#page-63a").hide();
    $("#page-70a-update").text(money);
    $("#page-70a").show();
  });

//page 70a
  $("#go-to-71a").click(function(event){
    event.preventDefault();
    $("#page-70a").hide();
    $("#page-71a").show();
  });

//page 71a
  $("#go-to-72a").click(function(event){
    event.preventDefault();
    var time = parseInt($("#page-71a-form input:radio[name=time]:checked").val());
    newPlayer.calculateTime(time);

    updateScoreboard();
    loserDetector();
    $("#page-71a").hide();
    $("#page-72a-update").text(time);
    $("#page-72a").show();
  });

//page 72a
  $("#go-to-73a").click(function(event){
    event.preventDefault();
    var focus = parseInt($("#page-72a-form input:radio[name=focus]:checked").val());
    newPlayer.calculateFocus(focus);

    updateScoreboard();
    loserDetector();
    $("#page-72a").hide();
    $("#page-73a-update").text(focus);
    $("#page-73a").show();
  });

//page 73a
  $("#go-to-finish").click(function(event){
    event.preventDefault();

    var money = parseInt($("#page-73a-form input:radio[name=money]:checked").val());
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();

    $(".your-score").text(newPlayer.playerScore);
    var playerScore = newPlayer.playerScore;
    var highScores = highScoreGenerator(playerScore);

    updateScoreboard();
    $("#page-73a").hide();
    $("#page-final").show();

    if (newPlayer.playerScore < 100) {
      $("#low-score").show();
    } else if (newPlayer.playerScore < 200) {
      $("#medium-score").show();
    } else {
      $("#high-score").show();
    }
  });

//loser pages
  $(".start-over").click(function(event) {
    $("#question-pages").hide();
    $("#scoreboard-header").hide();
    $("#loser-pages").hide();
    $("#landing-page").show();
    location.reload();
  });
  });
});
