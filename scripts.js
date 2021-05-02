const Modal = {
  open(){
    // Abrir modal: adicionar class active ao modal
    document
      .querySelector('.modal-overlay')
      .classList.add('active')            
  },
  close(){
    //fechar o modal: remover a class active do modal
    document
      .querySelector('.modal-overlay')
      .classList.remove('active')            
  }
}

const transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '18/04/2021'
  }, 
  {
    id: 2,
    description: 'Criação de Site',
    amount: 200000,
    date: '18/04/2021'
  }, 
  {
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '18/04/2021'
  }
]

const Transaction = {
  incomes() {
    // somar as entrandas
  },
  expenses(){
    // somar as saidas
  }, 
  total() {
    // entradas - saídas
  }

}

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'),

  addTransaction(transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transaction[index])

    DOM.transactionsContainer.appendChild(tr)
    
  },
  innerHTMLTransaction(transaction){
    const CSSclass = transaction.amount > 0 ? "income" : "expense" 
    const amount = Utils.formatCurrency(transaction.amount)
    const html = `
    <tr>
      <td class="description">${transaction.description}</td>
      <td class="${CSSclass}">${amount}</td>
      <td class="date">${transaction.date}</td>
      <td>
        <img src="./assets/minus.svg" alt="Remover transação" />
      </td>
    </tr>
    `

    return html
  }
}

const Utils = {
  formatCurrency(value){
    const signal = Number(value) < 0 ? "-" : "+"
    value = String(value).replace(/\D/g, "")
    value = Number(value)/100
    value = value.toLocaleString("pt-BR", {
      style: "currency", 
      currency: "BRL"
    })
    return signal + value
  }
}

for(let i = 0; i < transactions.length; i++){
  DOM.addTransaction(transactions, i)
}

