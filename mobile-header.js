(function () {
    var mqDesktop = window.matchMedia('(min-width: 769px)');
    var mqMobile = window.matchMedia('(max-width: 768px)');

    function syncContactDetails() {
        var details = document.querySelector('.header-contact-details');
        if (!details) return;
        if (mqDesktop.matches) {
            details.setAttribute('open', '');
        } else {
            details.removeAttribute('open');
        }
    }

    function syncCompactHeader() {
        if (!mqMobile.matches) {
            document.body.classList.remove('mobile-header-compact');
            return;
        }
        document.body.classList.toggle('mobile-header-compact', window.scrollY > 40);
    }

    function init() {
        syncContactDetails();
        syncCompactHeader();
        mqDesktop.addEventListener('change', syncContactDetails);
        window.addEventListener('scroll', syncCompactHeader, { passive: true });
        window.addEventListener('resize', function () {
            syncContactDetails();
            syncCompactHeader();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
