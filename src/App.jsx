import { useState } from 'react'
import './styles.css'

function App() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [mensagem, setMensagem] = useState('Insira os dados')

  const calcularIMC = () => {
    const alt = altura / 100
    const imc = peso / (alt * alt)

    if (imc < 18.6) {
      setMensagem('Abaixo do peso - IMC: ' + imc.toFixed(2))
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem('Peso ideal - IMC: ' + imc.toFixed(2))
    } else if (imc >= 24.9 && imc < 34.9) {
      setMensagem('Pouco acima do peso - IMC: ' + imc.toFixed(2))
    } else if (imc > 34.9) {
      setMensagem('Muito acima do peso - IMC: ' + imc.toFixed(2))
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>
      <div className="area-input">
        <input
          name="cm"
          type="number"
          placeholder="Peso em Kg"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <input type="number" placeholder="Altura em Cm" value={altura} onChange={(e) => setAltura(e.target.value)} />

        <button onClick={calcularIMC}>Calcular</button>
      </div>
      <h2>{mensagem}</h2>
    </div>
  )
}

export default App
