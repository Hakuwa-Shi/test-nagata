/**
 * 440Hzの正弦波を1秒間再生する関数
 */
function play440HzTone() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();

    const oscillator = audioCtx.createOscillator();
    
    oscillator.type = 'sine';
    oscillator.frequency.value = 440;

    oscillator.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 1);
}

// 画面読み込み完了後にイベントリスナーを登録
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.sound-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            play440HzTone();
        });
    });
});