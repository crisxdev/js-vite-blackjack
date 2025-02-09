

/**
 * Esta función entrega una carta del deck
 * @param {Array<String>} deck  Ejemplo: ['2C','2D','2H','2S']
 * @returns {Array<String>} retorna una carta diferente del deck
 */

export const pedirCarta = (deck) => {
    if(!deck) throw new Error("El parámetro deck es obligatorio como array de string ['2C','2D'])")
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
