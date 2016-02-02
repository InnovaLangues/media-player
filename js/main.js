$(document).ready(function (){
  $('.full').mediaelementplayer({

  });
  $('.medium').mediaelementplayer({
    features: ['playpause','current', 'progress','duration'],
    audioWidth: 150
  });
  $('.mini').mediaelementplayer({
    features: ['playpause'],
    audioWidth: 30
  });
});
