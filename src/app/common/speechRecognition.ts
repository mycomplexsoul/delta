const startSpeechRecognition = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const speechRecognition =
      window["SpeechRecognition"] || window["webkitSpeechRecognition"];
    let final = null;

    if (!speechRecognition) {
      return reject(new Error("SpeechRecognition API not available"));
    }

    const recognition = new speechRecognition();

    recognition.start();

    recognition.onresult = event => {
      const speechResult = event.results[0][0].transcript;
      final = speechResult;
      resolve(final);
    };

    recognition.onspeechend = () => {
      recognition.stop();
    };
  });
};

class TextToSpeech {
  synth = window.speechSynthesis;
  voices = this.synth.getVoices();

  constructor() {
    this.synth.onvoiceschanged = () => {
      this.voices = this.synth.getVoices();
      console.log(`Voices are ready, loaded ${this.voices.length} voices`);
    };
  }

  getVoice(lang: string = "es-US"): SpeechSynthesisVoice {
    if (!this.voices.length) {
      this.voices = this.synth.getVoices();
    }
    return this.voices.find(v => v.lang === lang);
  }

  textToSpeechVoice(
    text: string,
    lang: string = "es-US",
    rate: number = 1,
    volume: number = 1
  ) {
    const utt = new SpeechSynthesisUtterance(text);
    utt.voice = this.getVoice(lang);
    utt.rate = rate;
    utt.volume = volume;

    this.synth.speak(utt);
  }
}

export { startSpeechRecognition, TextToSpeech };
