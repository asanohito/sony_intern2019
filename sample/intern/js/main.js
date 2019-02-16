'use strict';

window.addEventListener('load', function () {
  setAsrEventListener(function (asrResult) {
    $('#log').html(asrResult);
     document.getElementById("audio").src = "https://ms-tts.apsgate.com/tts/api/v1/voice?text="+asrResult;
  });

  setSensorEventListener(function (sensingInfo) {

  });
})