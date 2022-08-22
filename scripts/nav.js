var nav = document.querySelector('nav');
        var activado = 0;
        if (screen.width < 768) {
            nav.classList.add('bg-dark', 'shadow', 'text-center');
            activado = 1;
        }
        window.addEventListener('scroll', function () {
            if (activado == 0) {
                if (window.pageYOffset > 100) {
                    nav.classList.add('bg-dark', 'shadow', 'text-center');
                    activado = 1;
                } else {
                    nav.classList.remove('bg-dark', 'shadow', 'text-center');
                    activado = 0;
                }
            }
        });
        window.addEventListener('resize', function () {
            if (activado == 0) {
                if (screen.width < 768) {
                    nav.classList.add('bg-dark', 'shadow', 'text-center');
                    activado = 1;
                } else {
                    nav.classList.remove('bg-dark', 'shadow', 'text-center');
                    activado = 0;
                }
            }
        });