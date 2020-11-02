setInterval(function () {
    var date = new Date();
    if (date.getHours() < 10) {
      $(".hour").html("0" + date.getHours());
    } else {
      $(".hour").html(date.getHours());
    }
    
    if (date.getMinutes() < 10) {
        $(".minutes").html(("0") + date.getMinutes());
    } else {
        $(".minutes").html(date.getMinutes());
    }
    if (date.getSeconds() < 10) {
      $(".seconds").html(("0") + date.getSeconds());
  } else {
    $(".seconds").html(date.getSeconds());
  }}, 1000);
