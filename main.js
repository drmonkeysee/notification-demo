function setUIState() {
  if (Notification.permission === 'granted') {
    $('#theButton').text('Unsubscribe');
    $('#output').text('Click unsubscribe to do something');
  } else if (Notification.permission === 'denied') {
    $('#theButton').prop('disabled', true);
    $('#output').text('You have rejected notifications from this domain');
  } else {
    $('#theButton').text('Subscribe');
    $('#output').text('Click subscribe to do get push notifications from me');
  }
}

$(function () {
  if (!Notification) {
    $('#output').text('Push notifications not supported!');
    return;
  }
  setUIState();

  $('#theButton').click(function () {
    if ($('#theButton').text() === 'Subscribe') {
      Notification.requestPermission()
        .then(function (permission) {
          alert(permission);
          setUIState();
        });
    }
  });
})