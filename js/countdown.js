// =========================================
// COMPTE À REBOURS DU MARIAGE
// Kevin & Ruth — 20 Novembre 2026
// =========================================

const weddingDate = new Date("2026-11-20T00:00:00").getTime();

const countdown = document.getElementById("countdown");

function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;

    // Si la date du mariage est arrivée
    if (difference <= 0) {

        countdown.innerHTML = `
            <div class="countdown-finished">
                💍 Aujourd'hui est le grand jour ! ❤️
            </div>
        `;

        return;
    }

    // Calcul du temps restant
    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    // Affichage
    countdown.innerHTML = `
        <div class="countdown-item">
            <span>${days}</span>
            <small>Dias</small>
        </div>

        <div class="countdown-item">
            <span>${hours}</span>
            <small>Horas</small>
        </div>

        <div class="countdown-item">
            <span>${minutes}</span>
            <small>Minutos</small>
        </div>

        <div class="countdown-item">
            <span>${seconds}</span>
            <small>Segundos</small>
        </div>
    `;
}

// Lancer immédiatement
updateCountdown();

// Actualiser chaque seconde
setInterval(updateCountdown, 1000);