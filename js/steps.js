document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.step');
    const docsModal = document.getElementById('docsModal');
    const showDocsBtn = document.querySelector('.show-docs-btn');
    const closeModal = document.querySelector('.close-modal');
    const trackStatusBtn = document.querySelector('.track-status-btn');

    // Función para animar elementos cuando son visibles
    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }

    // Configurar el Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.3,
        rootMargin: '-50px'
    });

    // Observar cada paso
    steps.forEach(step => observer.observe(step));

    // Modal de documentos
    showDocsBtn.addEventListener('click', () => {
        docsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeModal.addEventListener('click', () => {
        docsModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    docsModal.addEventListener('click', (e) => {
        if (e.target === docsModal) {
            docsModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Consulta de estado
    trackStatusBtn.addEventListener('click', () => {
        Swal.fire({
            title: 'Consultar Estado',
            html: `
                <div class="status-form">
                    <div class="form-group">
                        <input type="text" id="tramiteId" class="swal2-input" placeholder="Número de trámite">
                    </div>
                    <div class="form-group">
                        <input type="email" id="emailVerify" class="swal2-input" placeholder="Correo electrónico">
                    </div>
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: 'Consultar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#2091F9',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                const tramiteId = document.getElementById('tramiteId').value;
                const email = document.getElementById('emailVerify').value;

                if (!tramiteId || !email) {
                    Swal.showValidationMessage('Por favor completa todos los campos');
                    return false;
                }

                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    Swal.showValidationMessage('Por favor ingresa un correo electrónico válido');
                    return false;
                }

                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve({ tramiteId, email });
                    }, 1500);
                });
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Consulta Enviada',
                    text: 'Te enviaremos un correo con el estado de tu trámite',
                    confirmButtonColor: '#2091F9'
                });
            }
        });
    });
});
