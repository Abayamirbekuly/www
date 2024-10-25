// Массив с названиями нот и соответствующими файлами
const notes = {
    'C': 'zvuk-notyi-do.mp3',
    'D': 'zvuk-notyi-re.mp3',
    'E': 'zvuk-notyi-mi.mp3',
    'F': 'zvuk-notyi-fa.mp3',
    'G': 'zvuk-notyi-sol.mp3',
    'A': 'zvuk-notyi-lya.mp3',
    'B': 'zvuk-notyi-si.mp3'
};

// Функция для воспроизведения звука
function playSound(note) {
    const audio = new Audio(`sounds/${notes[note]}`);
    audio.play();
}

// Добавляем обработчики событий на все клавиши
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note'); // Получаем ноту
        playSound(note); // Воспроизводим звук
    });
});
