import readlineSync from 'readline-sync';

function main() {
    const inputString = readlineSync.question('Informe o texto a ser verificado: ');

    const matches = inputString.match(/a/gi);

    if (matches == null) {
        console.log('Nenhuma letra "a" ou "A" foi encontrada no texto informado.');
    } else {
        console.log('Quantidade de letras "a" ou "A" encontradas no texto informado: ' + matches.length);
    }
}

main();