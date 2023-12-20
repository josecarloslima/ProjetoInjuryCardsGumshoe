const cards = [
    {
        name: 'Enjoo de movimento',
        type: '- menor -',
        vinculo: 'maldição de Poseidon (maior)',
        text: 'Impede uso de pushes enquanto estiver em movimento. Descartada quando sair do veículo.',
        tags: ['não letal', 'shock']
    },
    {
        name: 'Maldição de Poseidon',
        type: '- maior -',
        vinculo: 'enjoo de movimento (menor)',
        text: 'Impede uso de pushes enquanto estiver em movimento. -2 em todos os testes devido a confusão. Descartada quando sair do veículo.',
        tags: ['não letal', 'shock']
    },
    {
        name: 'Embriagado',
        type: '- menor -',
        vinculo: 'intoxicado (maior)',
        text: 'Sempre que precisar realizar um teste e falhar, deve tomar a pior decisão possível. Um controle parcial das decisões é possível com um teste de lesão (dif 6). -1 em todos os testes. Descartada depois de 2 horas sem ingerir mais álcool.',
        tags: ['não letal', 'shock']
    },
    {
        name: 'Intoxicado',
        type: '- maior -',
        vinculo: 'embriagado (menor)',
        text: 'Sempre que precisar realizar um teste e falhar, deve tomar a pior decisão possível. +2 em Tolls. -2 em todos os testes. Trocada por EMBRIAGADO depois de 2 horas sem ingerir mais álcool.',
        tags: ['shock']
    },
];

// Exportar o array de cartas para uso em outros arquivos
export default cards;
