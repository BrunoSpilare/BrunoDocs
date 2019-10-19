import React, { Component } from 'react'
import Botao from './Botao'
import Tela from './Tela'

export default class Calculadora extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultado: 0,
            pcem: 0,
            valor1: null,
            valor2: null,
            valor3: null
        }
    }

    clickBotao(Botao) {
        console.log(Botao)
    }

    clickNumero = (Botao) => {
        if (!this.state.valor1) {
            this.setState({ valor1: parseInt(Botao) })
            return null;
        }
        this.setState({ valor2: parseInt(Botao) })
    }

    zerarTela = () => {
        this.setState({ resultado: 0, valor1: null, valor2: null })
    }

    soma = (operacao) => {
        if (operacao === "+") {
            let total = parseInt(this.state.valor1) + parseInt(this.state.valor2)
            this.setState({ resultado: total })
        }
    }

    subtracao = (operacao) => {
        if (operacao === "-") {
            let total = parseInt(this.state.valor1) - parseInt(this.state.valor2)
            this.setState({ resultado: total })
        }
    }

    divisao = (operacao) => {
        if (operacao === "÷") {
            let total = parseInt(this.state.valor1) / parseInt(this.state.valor2)
            this.setState({ resultado: total })
        }
    }

    multiplicacao = (operacao) => {
        if (operacao === "x") {
            let total = parseInt(this.state.valor1) * parseInt(this.state.valor2)
            this.setState({ resultado: total })
        }
    }
    render() {
        return (
            <table id='tela'>
                <tr>
                    <td>
                        <section>
                            <div>
                                <Tela resultado={this.state.resultado} />
                            </div>

                            <div id='botao-especiais'>
                                <Botao valor="AC" click={this.zerarTela} />
                                <Botao valor="+/-" click={this.clickBotao} />
                                <Botao valor="%" click={this.porcentagem} />
                                <nobr id='botao-operação'>
                                    <Botao valor="÷" click={this.divisao} />
                                </nobr>
                            </div>

                            <div id='botao-numerico'>
                                <Botao valor="7" click={this.clickNumero} />
                                <Botao valor="8" click={this.clickNumero} />
                                <Botao valor="9" click={this.clickNumero} />
                                <nobr id='botao-operação'>
                                    <Botao valor="x" click={this.multiplicacao} />
                                </nobr>
                            </div>

                            <div id='botao-numerico'>
                                <Botao valor="4" click={this.clickNumero} />
                                <Botao valor="5" click={this.clickNumero} />
                                <Botao valor="6" click={this.clickNumero} />
                                <nobr id='botao-operação'>
                                    <Botao valor="-" click={this.subtracao} />
                                </nobr>
                            </div>

                            <div id='botao-numerico'>
                                <Botao valor="1" click={this.clickNumero} />
                                <Botao valor="2" click={this.clickNumero} />
                                <Botao valor="3" click={this.clickNumero} />
                                <nobr id='botao-operação'>
                                    <Botao valor="+" click={this.soma} />
                                </nobr>
                            </div>

                            <div id='botao-numerico'>
                                <nobr id='botao-zero'>
                                    <Botao valor="0" click={this.clickNumero} />
                                </nobr>
                                <Botao valor="," click={this.clickBotao} />
                                <nobr id='botao-operação'>
                                    <Botao valor="=" click={this.clickBotao} />
                                </nobr>
                            </div>
                        </section>
                    </td>
                </tr>
            </table>
        )
    }}