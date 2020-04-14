import {WORDS} from './words.js';

var history = [];


function init() {
    document.getElementById('back').onclick = onBack;
    document.getElementById('fwd').onclick = onFwd;

    onFwd();
}


function prevWordIx() {
    if (history.length == 0) return null;
    return history[history.length - 1];
}


function setWord(index) {
    document.getElementById('word').innerHTML = WORDS[index];
}


function onBack() {
    history.pop();

    if (history.length == 0) return;

    setWord(prevWordIx());
}


function onFwd() {
    const max = WORDS.length;

    var wordIx = 0;
    do {
        wordIx = Math.floor(Math.random() * Math.floor(max));
    } while (wordIx == prevWordIx());

    setWord(wordIx);
    history.push(wordIx);
}


////////////////////////////////////////////////////////////////////////////////
init();
