function drawHeart() {
    const canvas = document.getElementById('heartCanvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Xóa canvas trước khi vẽ

    ctx.beginPath();
    ctx.moveTo(250, 300); // Điểm bắt đầu của trái tim

    // Vẽ bên trái của trái tim
    ctx.bezierCurveTo(250, 200, 100, 200, 100, 300);
    ctx.bezierCurveTo(100, 400, 250, 450, 250, 500);

    // Vẽ bên phải của trái tim
    ctx.bezierCurveTo(250, 450, 400, 400, 400, 300);
    ctx.bezierCurveTo(400, 200, 250, 200, 250, 300);

    ctx.fillStyle = 'red';
    ctx.fill();
}
