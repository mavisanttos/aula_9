// Classe Fila (FIFO)
class Fila {
    constructor() {
      this.itens = [];
    }
  
    // Adiciona um item ao final da fila
    enfileirar(item) {
      this.itens.push(item);
      console.log(`📥 '${item}' entrou na fila.`);
    }
  
    // Remove o item do início da fila
    desenfileirar() {
      if (this.estaVazia()) {
        console.log('⚠ A fila está vazia. Nenhum item para remover.');
        return null;
      }
      const removido = this.itens.shift();
      console.log(`🚪 '${removido}' saiu da fila.`);
      return removido;
    }
  
    // Mostra o primeiro da fila
    frente() {
      const proximo = this.itens[0];
      console.log(`👀 Próximo a ser atendido: '${proximo}'`);
      return proximo;
    }
  
    // Verifica se a fila está vazia
    estaVazia() {
      return this.itens.length === 0;
    }
  
    // Imprime a fila atual
    imprimir() {
      console.log('🚶‍♂ Fila atual:', this.itens.join(' -> ') || 'vazia');
    }
  }
  
  // Simulação
  const filaAtendimento = new Fila();
  
  // Adicionando alunos à fila
  filaAtendimento.enfileirar('Ana');
  filaAtendimento.enfileirar('Bruno');
  filaAtendimento.enfileirar('Carlos');
  
  // Mostrar fila atual
  filaAtendimento.imprimir();  // Ana -> Bruno -> Carlos
  
  // Ver quem será o próximo
  filaAtendimento.frente();    // Ana
  
  // Atender o primeiro aluno
  filaAtendimento.desenfileirar();  // Ana
  
  // Mostrar fila atual novamente
  filaAtendimento.imprimir();  // Bruno -> Carlos
  
  // Ver novo próximo
  filaAtendimento.frente();    // Bruno
  