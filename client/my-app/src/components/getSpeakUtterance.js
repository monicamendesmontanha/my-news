const synth = window.speechSynthesis;

const getSpeakUtterance = text => {
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
      console.error("SpeechSynthesisUtterance.onerror", event);
    };

    utterThis.voice = synth.getVoices().find(v => v.name === "Karen");
    console.log(utterThis.voice)
    utterThis.pitch = "1";
    utterThis.rate = "1";

    return utterThis;
  }
};

export default getSpeakUtterance;