import {WORDS} from './words.js';

var history = [];
var historyIx = -1;


function init() {
    document.getElementById('back').onclick = onBack;
    document.getElementById('fwd').onclick = onFwd;

    onFwd();
}


function setWord(index) {
    document.getElementById('word').innerHTML = WORDS[index];
}


function getNewWordIx() {
    var result = 0;
    do {
        result = Math.floor(Math.random() * Math.floor(WORDS.length));
    } while (
        history.length != 0 &&            // There is no history before the first letter generation.
        result == history[historyIx]
    );

    return result;
}


function onBack() {
    if (historyIx == 0) return;

    historyIx--;
    setWord(history[historyIx]);
}


function onFwd() {
    if (historyIx < history.length - 1) {
        historyIx++;
        setWord(history[historyIx]);
        return;
    }

    var newWordIx = getNewWordIx();
    setWord(newWordIx);
    history.push(newWordIx);
    historyIx++;
}


////////////////////////////////////////////////////////////////////////////////
init();
