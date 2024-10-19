/** Funcion para organizar una lista de regalos */
function organizeGifts(giftString) {
    let result = "";

    const giftsSplit = giftString.match(/\d+[a-z]/g);

    for (let i = 0; i < giftsSplit.length; i++) {
        const gift = giftsSplit[i];
        const quantity = Number(gift.slice(0, -1));
        const giftType = gift.charAt(gift.length - 1);

        // Calcular el número de palés necesarios
        const pallets = `[${giftType}]`.repeat(Math.floor(quantity / 50));

        // Calcular el resto después de empaquetar en palés
        const remainder = quantity % 50;

        // Calcular el número de cajas necesarias
        const boxes = `{${giftType}}`.repeat(Math.floor(remainder / 10));

        // Calcular los regalos restantes después de empaquetar en cajas
        const remainderGifts = giftType.repeat(remainder % 10);

        // Verificar si hay regalos restantes y crear una bolsa
        const bags = remainderGifts && `(${remainderGifts})`;

        result += pallets + boxes + bags;
    }

    console.log(result);
}
