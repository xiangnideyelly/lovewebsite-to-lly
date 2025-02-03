
window.onload = function () {
    const audio = document.getElementById('music');
    document.addEventListener('click', function () {
        audio.play().catch((error) => {
            console.error('音乐播放失败:', error);
        });
        document.removeEventListener('click', arguments.callee);
    });
};


function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 10 + 5 + 's';
    petal.style.opacity = Math.random();
    petal.style.transform = `rotate(${Math.random() * 360}deg)`;

    const petals = document.getElementById('petals');
    petals.appendChild(petal);

    setTimeout(() => {
        petals.removeChild(petal);
    }, (parseFloat(petal.style.animationDuration) * 1000));
}

setInterval(createPetal, 200);


const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

if (yesBtn) {
    yesBtn.addEventListener('click', function () {
        alert('哇！太开心了🥰！我们去哪玩？都听你的');
    });
}

if (noBtn) {
    noBtn.addEventListener('click', function () {
        alert('没关系的，我可以等你慢慢了解我哦~');
    });
}

// 获取唱片元素
const record = document.getElementById('record');

// 监听唱片的点击事件
record.addEventListener('click', function () {
    // 切换唱片元素的旋转类
    this.classList.toggle('rotate');
});