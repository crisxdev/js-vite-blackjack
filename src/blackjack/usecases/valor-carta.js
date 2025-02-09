

/**
 * Esta función entrega el valor de una carta
 * @param <String> carta Ejemplo: "2C", "AC"
 * @returns <Number> retorna el valor numérico de la carta. Ejemplo: "2,10,11.."
 */

export const valorCarta = (carta) => {
    if(!carta || carta.length<2) throw new Error("La carta es obligatoria como un string de dos valores(2C..)")
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
