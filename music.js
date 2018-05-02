const musicInfo = [];

function addSongFromField(event) {
  event.preventDefault();

  const info = $('#musicField').eq(0).val();

  musicInfo.push(info);
  renderList();
  $('#musicField').eq(0).val('');
}

$('#addButton').click(addSongFromField);
$('#musicField').keyup(function (event) {
  if (event.which == 13) { // User presses Enter
    addSongFromField(event);
  }
});

function renderList() {
  const $list = $('.info').eq(0);

  $list.empty();

  for (const info of musicInfo) {
    const $item = $('<li class="list-group-item">').text(info);

    $list.append($item)
  }
}

$('#getPlaylistBtn').click(function (event) {

  let params = '';
  musicInfo.forEach((i) => {
    params += i + '+';
  });

  $.ajax({
    url: 'https://itunes.apple.com/search?term=' + params
  }).then((data) => {
    console.log(JSON.parse(data));
  });

  console.log('Testing Music Call');
});
