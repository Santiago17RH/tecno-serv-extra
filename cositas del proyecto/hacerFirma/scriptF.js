(function () {
    const canvas = document.getElementById('miCanvas');
    const ctx = canvas.getContext('2d');
    let dibujando = false;
    let colorPincel = '#000';

    canvas.addEventListener('mousedown', (e) => {
        dibujando = true;
        dibujar(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop, false);
    });

    canvas.addEventListener('mousemove', (e) => {
        if (dibujando) {
            if (colorPincel === 'rgba(0, 0, 0, 0)') {
                usarBorrador(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
            } else {
                dibujar(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop, true);
            }
        }
    });

    canvas.addEventListener('mouseup', () => {
        dibujando = false;
        ctx.beginPath();
    });

    function dibujar(x, y, moviendo) {
        if (!moviendo) {
            ctx.beginPath();
        }
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = colorPincel;
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    function usarBorrador(x, y) {
        const tamañoBorrador = 20;
        const xBorrador = Math.round(x - tamañoBorrador / 2);
        const yBorrador = Math.round(y - tamañoBorrador / 2);
        ctx.clearRect(xBorrador, yBorrador, tamañoBorrador, tamañoBorrador);
    }

    window.descargarImagen = function () {
        const enlace = document.createElement('a');
        enlace.href = canvas.toDataURL('image/png');
        enlace.download = 'mi firma.png';

        document.body.appendChild(enlace);

        const clicEvent = new MouseEvent('click');
        enlace.dispatchEvent(clicEvent);

        document.body.removeChild(enlace);
    };

    window.usarBorrador = function () {
        colorPincel = 'rgba(0, 0, 0, 0)';
    };

    window.usarPincelNegro = function () {
        colorPincel = '#000';
    };

    window.borrarTodo = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
})();