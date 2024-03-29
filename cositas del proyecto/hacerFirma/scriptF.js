(function () {
    const canvas = document.getElementById('miCanvas');
    const ctx = canvas.getContext('2d');
    let dibujando = false;
    let colorPincel = '#000';

    function ajustarTamañoCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    window.addEventListener('load', () => {
        ajustarTamañoCanvas();
    });

    window.addEventListener('resize', () => {
        ajustarTamañoCanvas();
    });

    canvas.addEventListener('mousedown', (e) => {
        dibujando = true;
        dibujar(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop, false);
    });

    canvas.addEventListener('mousemove', (e) => {
        if (dibujando) {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (colorPincel === 'rgba(0, 0, 0, 0)') {
                usarBorrador(x, y);
            } else {
                dibujar(x, y, true);
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
        enlace.download = 'mi_firma.png';

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
