var nav = document.querySelector('nav');
        var resize = 0;
        var bajado = 0;
        if (screen.width < 768) {
            nav.classList.add('bg-dark', 'shadow');
            resize = 1;
        }
        window.addEventListener('scroll', function () {
            if (resize == 0) {
                if (window.pageYOffset > 100) {
                    nav.classList.add('bg-dark', 'shadow');
                    bajado = 1;
                } else {
                    nav.classList.remove('bg-dark', 'shadow');
                    bajado = 0;
                }
            }
        });
        window.addEventListener('resize', function () {
            if (bajado == 0) {
                if (screen.width < 768) {
                    nav.classList.add('bg-dark', 'shadow');
                    resize = 1;
                } else {
                    nav.classList.remove('bg-dark', 'shadow');
                    resize = 0;
                }
            }
        });