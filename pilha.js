class Pilha {
    constructor() {
      this.itens = [];
    }
  
    // Adiciona um novo documento urgente à pilha
    empilhar(documento) {
      this.itens.push(documento);
      console.log(`📄 Documento urgente '${documento}' adicionado à pilha.`);
    }
  
    // Remove o documento do topo da pilha (último adicionado)
    desempilhar() {
      if (this.estaVazia()) {
        console.log('⚠ Nenhum documento para resolver. Pilha está vazia.');
        return null;
      }
      const resolvido = this.itens.pop();
      console.log(`✅ Documento '${resolvido}' resolvido e removido da pilha.`);
      return resolvido;
    }
  
    // Visualiza o documento no topo da pilha
    topo() {
      if (this.estaVazia()) {
        console.log('🔍 Nenhum documento no topo. Pilha vazia.');
        return null;
      }
      const topo = this.itens[this.itens.length - 1];
      console.log(`📌 Documento no topo: '${topo}'`);
      return topo;
    }
  
    // Mostra todos os documentos pendentes
    imprimir() {
      if (this.estaVazia()) {
        console.log('📦 Nenhum documento pendente. Pilha vazia.');
      } else {
        console.log('📦 Documentos pendentes (topo para base):');
        console.log(this.itens.slice().reverse().join(' <- topo'));
      }
    }
  
    estaVazia() {
      return this.itens.length === 0;
    }
  
    limpar() {
      this.itens = [];
      console.log('🧹 Todos os documentos foram removidos da pilha.');
    }
  }
  
  // Demonstração
  const documentosUrgentes = new Pilha();
  
  // Adicionando documentos
  documentosUrgentes.empilhar('Relatório Financeiro');
  documentosUrgentes.empilhar('Contrato Urgente');
  documentosUrgentes.empilhar('Revisão de Projeto');
  
  // Removendo (resolvendo) o último documento
  documentosUrgentes.desempilhar();  // Resolvido: Revisão de Projeto
  
  // Mostrando o documento no topo
  documentosUrgentes.topo();  // Contrato Urgente
  
  // Mostrando todos os documentos pendentes
  documentosUrgentes.imprimir();
  