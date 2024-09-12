document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', function() {
    var serviciosLink = document.querySelector('a[href="#Services"]');
    serviciosLink.addEventListener('click', function(event) {
        event.preventDefault();
        var servicesSection = document.getElementById('Services');
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    });

    var contactoLink = document.querySelector('a[href="#Contact"]');
    contactoLink.addEventListener('click', function(event) {
        event.preventDefault();
        var contactSection = document.getElementById('Contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});

function redirectToPage() {
    window.location.href = "rooms/";
}
function redirectToPage2() {
    window.location.href = "rooms/index-2.html";
}
function redirectToPage3() {
    window.location.href = "rooms/index-3.html";
}
function redirectToPage4() {
    window.location.href = "rooms/index-4.html";
}
function redirectToPage5() {
    window.location.href = "rooms/index-5.html";
}
function redirectToPage6() {
    window.location.href = "rooms/index-6.html";
}
function redirectToPage7() {
    window.location.href = "rooms/index-7.html";
}
function redirectToPage8() {
    window.location.href = "rooms/Funciones/";
}
function redirectToPage10() {
    window.location.href = "rooms/Funciones/";
}
function redirectToPage11() {
    window.location.href = "repositorios/Error/";
}

// Codigo de la modal
var modal = document.getElementById("appModal");
var span = document.getElementsByClassName("close")[0];

// Función para mostrar el modal
function showModal() {
    modal.style.display = "block";
    setTimeout(function() {
        modal.style.opacity = 1;
    }, 10); // Delay pequeño para que la transición se vea
}

// Función para cerrar el modal
function closeModal() {
    modal.style.opacity = 0;
    setTimeout(function() {
        modal.style.display = "none";
    }, 500); 
}

span.onclick = function() {
    closeModal();
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Mostrar modal cuando se alcanza una sección específica
document.addEventListener('DOMContentLoaded', function() {
    const targetSection = document.getElementById('targetSection');
    let modalShown = false;

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('scroll', function() {
        if (!modalShown && isElementInViewport(targetSection)) {
            showModal();
            modalShown = true;
        }
    });
});
