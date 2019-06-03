const synth = window.speechSynthesis;

const speak = text => {
  if (synth.speaking) {
    console.error("speechSynthesis.speaking");
    return;
  }
  if (text !== "") {
    var utterThis = new SpeechSynthesisUtterance(text);
    utterThis.onend = function(event) {
      console.log("SpeechSynthesisUtterance.onend");
    };
    utterThis.onerror = function(event) {
      console.error("SpeechSynthesisUtterance.onerror");
    };

    utterThis.voice = synth.getVoices()[0];
    utterThis.pitch = "1";
    utterThis.rate = "1";
    synth.speak(utterThis);
  }
};

export default speak;