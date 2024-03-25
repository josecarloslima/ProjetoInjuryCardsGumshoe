const cards = [
    {
        nome: 'Enjoo de movimento',
        tipo: 'menor',
        vinculo: 'maldição de Poseidon (maior)',
        texto: 'Impede uso de pushes enquanto estiver em movimento. Descartada quando sair do veículo.',
        tags: ['não letal', 'shock']
    },
    {
        nome: 'Maldição de Poseidon',
        tipo: 'maior',
        vinculo: 'enjoo de movimento (menor)',
        texto: 'Impede uso de pushes enquanto estiver em movimento. -2 em todos os testes devido a confusão. Descartada quando sair do veículo.',
        tags: ['não letal', 'shock']
    },
    {
        nome: 'Embriagado',
        tipo: 'menor',
        vinculo: 'intoxicado (maior)',
        texto: 'Sempre que precisar realizar um teste e falhar, deve tomar a pior decisão possível. Um controle parcial das decisões é possível com um teste de lesão (dif 6). -1 em todos os testes. Descartada depois de 2 horas sem ingerir mais álcool.',
        tags: ['não letal', 'shock']
    },
    {
        nome: 'Intoxicado',
        tipo: 'maior',
        vinculo: 'embriagado (menor)',
        texto: 'Sempre que precisar realizar um teste e falhar, deve tomar a pior decisão possível. +2 em Tolls. -2 em todos os testes. Trocada por EMBRIAGADO depois de 2 horas sem ingerir mais álcool.',
        tags: ['shock']
    },
];

// Exportar o array de cartas para uso em outros arquivos
export default cards;
