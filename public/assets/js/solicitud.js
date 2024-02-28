const iconos = document.querySelectorAll('.icono');
const prioridades = document.querySelectorAll('.prioridad');

iconos.forEach(icono => {
    icono.addEventListener('click', e => {
        iconos.forEach(i => {
            if(i.classList.contains('selected')){
                i.classList.remove('selected');
                let nuevoSrc = i.src;
                nuevoSrc = nuevoSrc.replace('-s', '-b');
                i.src = nuevoSrc;
            }
        });
        if(!icono.classList.contains('selected')){
            icono.classList.add('selected');
            let nuevoSrc = icono.src;
            nuevoSrc = nuevoSrc.replace('-b', '-s');
            icono.src = nuevoSrc;
        }
    });
});

prioridades.forEach(prioridad => {
    prioridad.addEventListener('click', e => {
        e.preventDefault();
        prioridades.forEach(p => p.classList.remove('pselected'));
        if(!prioridad.classList.contains('pselected')) {
            prioridad.classList.add('pselected');
        }
    });
});