import { pedirCarta, valorCarta, crearCartaHTML } from "./";

/**
 *
 * @param {Number} puntosMinimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento html para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora div de cartas computadora
 * @param {Array<String>} deck
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    if (!puntosMinimos) throw new Error("Puntos mínimos son necesario");
    if (!puntosHTML) throw new Error("Argumento puntosHTML son necesario");

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        console.log(carta);
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        let imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert("Nadie gana :(");
        } else if (puntosMinimos > 21) {
            alert("Computadora gana");
        } else if (puntosComputadora > 21) {
            alert("Jugador Gana");
        } else {
            alert("Computadora Gana");
        }
    }, 100);
};
