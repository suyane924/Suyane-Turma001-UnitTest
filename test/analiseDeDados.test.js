const AnaliseDeDados = require('../src/analiseDeDados');

describe('Análise Estatística de Dados', () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([7, 12, 8, 15, 9, 11]);
  });

  test('adicionar novos dados corretamente', () => {
    analise.adicionarDados([14, 6]);
    expect(analise.dados).toEqual([7, 12, 8, 15, 9, 11, 14, 6]);
  });

  test('lançar erro ao adicionar dados que não sejam um array', () => {
    expect(() => analise.adicionarDados(5)).toThrow("Os dados devem ser um array.");
  });

  test('limpar os dados corretamente', () => {
    analise.limparDados();
    expect(analise.dados).toEqual([]);
  });

  test('ordenar os dados corretamente', () => {
    expect(analise.ordenarDados()).toEqual([7, 8, 9, 11, 12, 15]);
  });

  test('calcular a média corretamente', () => {
    expect(analise.calcularMedia()).toBe(10.333333333333334);
  });

  test('calcular a mediana corretamente', () => {
    expect(analise.calcularMediana()).toBe(10);
  });

  test('calcular a moda corretamente', () => {
    expect(analise.calcularModa()).toEqual([7, 12, 8, 15, 9, 11]);
  });

  test('calcular a variância corretamente', () => {
    expect(analise.calcularVariancia()).toBeCloseTo(8.4722, 4);
  });

  test('calcular o desvio padrão corretamente', () => {
    expect(analise.calcularDesvioPadrao()).toBeCloseTo(2.9117, 4);
  });

  test('encontrar o mínimo corretamente', () => {
    expect(analise.encontrarMinimo()).toBe(7);
  });

  test('encontrar o máximo corretamente', () => {
    expect(analise.encontrarMaximo()).toBe(15);
  });

  test('normalizar os dados corretamente', () => {
    expect(analise.normalizarDados()).toEqual([0, 0.4167, 0.0833, 0.6667, 0.1667, 0.3333]);
  });

  test('calcular o percentil corretamente', () => {
    expect(analise.calcularPercentil(50)).toBe(10);
  });

  test('calcular a soma corretamente', () => {
    expect(analise.calcularSoma()).toBe(62);
  });

  test('calcular o produto corretamente', () => {
    expect(analise.calcularProduto()).toBe(798840);
  });

  test('calcular a amplitude corretamente', () => {
    expect(analise.calcularAmplitude()).toBe(8);
  });

  test('calcular o coeficiente de variação corretamente', () => {
    expect(analise.calcularCoeficienteVariacao()).toBeCloseTo(28.167, 3);
  });

  test('calcular o coeficiente de variação corretamente', () => {
    expect(analise.calcularCoeficienteVariacao()).toBeCloseTo(28.167, 3)
  });

  test('remover outliers corretamente', () => {
    analise.adicionarDados([50]);
    analise.removerOutliers();
    expect(analise.dados).toEqual([7, 12, 8, 15, 9, 11]);
  });

  test('calcular a correlação corretamente', () => {
    const outroConjunto = [21, 24, 19, 30, 22, 25];
    expect(analise.calcularCorrelacao(outroConjunto)).toBeCloseTo(0.98, 2);
  });  
});


