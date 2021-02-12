// Usar ts-node no terminal
import moment from 'moment'
import readline from 'readline'

moment.locale('pt-br')

interface ResponseSyndicEvent<T> {
  message: T
  date: T
}

function getResponse(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  return new Promise((resolve) => {
    rl.question(question, (resp) => {
      resolve(resp)
      rl.close()
    })
  })
}

// getResponse('Esse é um teste? ').then(console.log)


function girlFriend(): void { // Um observer interessado no evento!
  setTimeout(() => {
    console.log('N: Apagar as luzes...')
    console.log('N: Pedir silêncio...')
    console.log('N: Surpresa!!!')
  }, 2000)
}

function syndic({ message, date }: ResponseSyndicEvent<string>): void { // Um observer interessado no evento!
  console.log('S: Monitorando o barulho.');
  console.log(`S: Evento -> ${message}`)
  console.log(`S: Date: -> ${moment(date).format('DD/MM/YYYY')}`)
}

async function concierge(peoples: any[]) { // O subject que ouvirá o evento (namorado)
  while (true) {
    const resp = await getResponse('O namorado chegou? (s/N/q)')
    if (resp.toLowerCase() === 's') {
      // Os observadores são notificados
      return (peoples || []).forEach(obs => obs({ date: Date.now(), message: 'Aniversário da Pietra.' }))
    }
    else if (resp.toLowerCase() === 'q') { break; }
  }
}

/**
 * Chamada da Função -> Registrei dois observadores
 * Observers são as funções "girlFriend" e "syndic"
 * Subject é o "concierge"
 */
concierge([girlFriend, syndic])
