// =========================================
// CONVITE PERSONALIZADO — KEVIN & RUTH
// =========================================

const params = new URLSearchParams(window.location.search);
const guestId = params.get("id");

async function loadGuest() {

    if (!guestId) {
        return;
    }

    try {

        const response = await fetch("data/guests.json");

        const guests = await response.json();

        const guest = guests.find(function(item) {
            return item.id === guestId;
        });

        if (!guest) {
            console.log("Invitado não encontrado.");
            return;
        }

        console.log("Invitado :", guest.nome);
        console.log("Número de convidados :", guest.convidados);
        console.log("Mesa :", guest.mesa);

        // Mostrar o convite personalizado

        const guestWelcome = document.getElementById("guestWelcome");
        const guestName = document.getElementById("guestName");
        const guestPeople = document.getElementById("guestPeople");
        const guestTable = document.getElementById("guestTable");

        guestName.textContent = guest.nome;

        guestPeople.textContent = guest.convidados;

        guestTable.textContent = guest.mesa;

        guestWelcome.style.display = "block";

    } catch (error) {

        console.error(
            "Erro ao carregar os dados do convidado:",
            error
        );

    }

}

loadGuest();