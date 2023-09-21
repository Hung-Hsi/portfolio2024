const buttonsComponent = document.querySelector('.buttons');
const buttonsToggle = document.querySelector('.buttons_toggle');

let isDragging = false;
let offsetX, offsetY;

// 監聽滑鼠按下事件
buttonsComponent.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - buttonsComponent.getBoundingClientRect().left;
    offsetY = e.clientY - buttonsComponent.getBoundingClientRect().top;
    buttonsComponent.classList.add('dragging');
});

// 監聽滑鼠移動事件
document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;

    // 確保目標物不會超出視窗邊界
    const maxX = window.innerWidth - buttonsComponent.offsetWidth;
    const maxY = window.innerHeight - buttonsComponent.offsetHeight;

    // 使用 Math.min 和 Math.max 限制位置在有效範圍內
    const clampedX = Math.min(maxX, Math.max(0, newX));
    const clampedY = Math.min(maxY, Math.max(0, newY));

    buttonsComponent.style.left = `${clampedX}px`;
    buttonsComponent.style.top = `${clampedY}px`;
});

// 監聽滑鼠放開事件
document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
});

// 監聽觸摸按下事件
buttonsComponent.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    isDragging = true;
    offsetX = touch.clientX - buttonsComponent.getBoundingClientRect().left;
    offsetY = touch.clientY - buttonsComponent.getBoundingClientRect().top;
    buttonsComponent.classList.add('dragging');
});

// 監聽觸摸移動事件
document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];

    const newPositionX = touch.clientX - offsetX;
    const newPositionY = touch.clientY - offsetY;

    // 確保目標物不會超出視窗邊界
    const maxX = window.innerWidth - buttonsComponent.offsetWidth;
    const maxY = window.innerHeight - buttonsComponent.offsetHeight;

    // 使用 Math.min 和 Math.max 限制位置在有效範圍內
    const clampedX = Math.min(maxX, Math.max(0, newPositionX));
    const clampedY = Math.min(maxY, Math.max(0, newPositionY));

    buttonsComponent.style.left = `${clampedX}px`;
    buttonsComponent.style.top = `${clampedY}px`;
    // 防止滾動
    e.preventDefault();
});

// 監聽觸摸放開事件
document.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    buttonsComponent.classList.remove('dragging');
});



buttonsToggle.addEventListener('click', toggleButtons);

// 點空白處解除 toggle
document.addEventListener('click', function (e) {
    if (!buttonsComponent.contains(e.target) && !buttonsToggle.contains(e.target)) {
        // 如果點擊事件不在 buttonsComponent 和 buttonsToggle 元素內部，則解除 toggle
        buttonsToggle.classList.remove('buttons_toggle--active');
        buttonsComponent.classList.remove('buttons--active');
    }
});

function toggleButtons() {
    buttonsToggle.classList.toggle('buttons_toggle--active');
    buttonsComponent.classList.toggle('buttons--active');
    document.activeElement.blur();
}
