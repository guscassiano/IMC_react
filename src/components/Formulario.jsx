import { useState } from "react"
import formulario from './formulario.module.css'

const Formulario = ()=> {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)

    const calculaIMC = ()=> {
        const IMC = (peso / (altura * altura)).toFixed(1)
        if(altura == 0) {
            return(
                <h2 className={formulario.resultadoImc}>
                    Entre com valores válidos!!
                </h2>
            )
        } else if(IMC < 18.5) {
            return(
                <h2 className={formulario.resultadoImc}>
                    Seu IMC: {IMC}, você está magro!
                </h2>
            )
        } else if (IMC >= 18.5 && IMC <= 24.9) {
            return(
                <h2 className={formulario.resultadoImc}>
                    Seu IMC: {IMC}, você está saudável!
                </h2>
            )
        } else if (IMC >= 25 && IMC <= 29.9) {
            return(
                <h2 className={formulario.resultadoImc}>
                    Seu IMC: {IMC}, você está com sobrepeso!
                </h2>
            )
        } else if (IMC >= 30 && IMC <= 39.9) {
            return(
                <h2 className={formulario.resultadoImc}>
                    Seu IMC: {IMC}, você está com obesidade!
                </h2>
            )
        } else if(IMC >= 40) {
            return(
                <h2 className={formulario.resultadoImc}>
                    Seu IMC: {IMC}, você está com obesidade grave!
                </h2>
            )
        } else {
            return(
                <h2 className={formulario.resultadoImc}>
                    Entre com valores válidos!!
                </h2>
            )
        }
    }

    return(
        <form className={formulario.formulario}>
            <input className={formulario.input} onChange={evento => setPeso(parseFloat(evento.target.value))} type="number" placeholder="Digite o seu peso (Kg)"/>
            <input className={formulario.input} onChange={evento => setAltura(parseFloat(evento.target.value))} type="number" placeholder="Digite a sua altura (m)"/>
            {calculaIMC()}
        </form>
    )
}

export default Formulario