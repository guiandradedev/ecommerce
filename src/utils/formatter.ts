export const replacePhone = (value: string) => {
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{2})(\d)/, '($1) $2') // captura 2 grupos de numero o primeiro de 2 e o segundo de 1, apos capturar o primeiro grupo ele adiciona parênteses e espaço antes do segundo grupo de numero
        .replace(/(\d{5})(\d)/, '$1-$2') // captura 2 grupos de numero o primeiro de 5 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um traço antes do segundo grupo de numero
        .replace(/(-\d{4})\d+?$/, '$1'); // captura 4 numeros seguidos de um traço e não deixa ser digitado mais nada
}

export const replaceCEP = (value: string) => {
    return value
        .replace(/\D/g, '') // Remove todos os caracteres que não são dígitos
        .replace(/(\d{5})(\d{0,3}).*/, '$1-$2'); // Adiciona um hífen após os primeiros cinco dígitos e limita a 3 caracteres após o hífen
}

export const replaceCPF = function(value: string) {
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}


export const replaceCNPJ = function(value: string) {
    return value
        .replace(/\D+/g, '') // não deixa ser digitado nenhuma letra
        .replace(/(\d{2})(\d)/, '$1.$2') // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 3 digitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2') // captura 2 grupos de número o primeiro e o segundo com 3 digitos, separados por /
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1') // captura os dois últimos 2 números, com um - antes dos dois números
}

export const priceFormatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

export const priceFormatterWithoutCurrency = new Intl.NumberFormat("en-GB", {
    style: "decimal", // Usando "decimal" em vez de "currency"
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });