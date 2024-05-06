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
    
    populateVoiceList();
    
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }
    
    //Voice Options
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        const textToSpeak = document.getElementById('text-to-speak').value;
        const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');
        
        if (textToSpeak !== '') {
            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            const voices = speechSynthesis.getVoices();
            const selectedVoiceObj = voices.find((voice) => voice.name === selectedVoice);
            
            //Text to voice
            if (selectedVoiceObj) {
                utterance.voice = selectedVoiceObj;
                speechSynthesis.speak(utterance);
                const faceImg = document.querySelector('img');
                faceImg.src = 'assets/images/smiling-open.png';
                
                utterance.onend = () => {
                    faceImg.src = 'assets/images/smiling.png';
                };
            } else {
                console.error('Selected voice not found');
            }
        } else {
            console.error('Please enter text to speak');
        }
    });
  }