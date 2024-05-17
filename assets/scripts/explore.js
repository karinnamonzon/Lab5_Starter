// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const voiceSelect = document.getElementById('voice-select');
    const speechSynthesis = window.speechSynthesis;
    
    //Create voice list
    function populateVoiceList() 
    {
        const voices = speechSynthesis.getVoices();
        voiceSelect.innerHTML = '';
        voices.forEach((voice) => {
            const option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            option.setAttribute('data-lang', voice.lang);
            option.setAttribute('data-name', voice.name);
            voiceSelect.appendChild(option);
        });
    }
    //Voice Options
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) 
    {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }
    
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
      //Text to voice
        const textToSpeak = document.getElementById('text-to-speak').value;
        const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');
        if (textToSpeak !== '') { //not empty
            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            const voices = speechSynthesis.getVoices();
            const talking = voices.find((voice) => voice.name === selectedVoice);

            //Move mouth
            utterance.voice = talking;
            speechSynthesis.speak(utterance);
            const faceImg = document.querySelector('img');
            faceImg.src = 'assets/images/smiling-open.png';
            utterance.onend = () => { faceImg.src = 'assets/images/smiling.png'; };
        } 
    });
  }
