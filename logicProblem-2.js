// Función para distribuir los juguetes en el trineo de Papá Noel.
function distributeGifts(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Función para obtener los vecinos de una posición
    function getNeighbors(i, j) {
        const neighbors = [];

        // Vecino de arriba
        if (i > 0 && matrix[i - 1][j] !== null) {
            neighbors.push(matrix[i - 1][j]);
        }
        // Vecino de abajo
        if (i < rows - 1 && matrix[i + 1][j] !== null) {
            neighbors.push(matrix[i + 1][j]);
        }
        // Vecino de la izquierda
        if (j > 0 && matrix[i][j - 1] !== null) {
            neighbors.push(matrix[i][j - 1]);
        }
        // Vecino de la derecha
        if (j < cols - 1 && matrix[i][j + 1] !== null) {
            neighbors.push(matrix[i][j + 1]);
        }

        return neighbors;
    }

    // Crear la nueva matriz para almacenar los resultados
    const result = [];

    for (let i = 0; i < rows; i++) {
        result[i] = [];
        for (let j = 0; j < cols; j++) {
            result[i][j] = 0;
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const value = matrix[i][j];
            const neighbors = getNeighbors(i, j);

            if (value !== null) {
                neighbors.push(value);
            }

            // Calcular la suma y el promedio de los vecinos
            let sum = 0;
            for (let k = 0; k < neighbors.length; k++) {
                sum += neighbors[k];
            }
            const average = sum / neighbors.length;

            result[i][j] = Math.round(average);
        }
    }

    return result;
}

// Función para mostrar el resultado en el HTML
function showResult() {
    const input = [
        [4, 5, 1],
        [6, null, 3],
        [8, null, 4],
    ];

    const output = distributeGifts(input);

    const outputString = output.map(row => row.join(', ')).join('<br>');

    document.getElementById('result').innerHTML = outputString;
}
