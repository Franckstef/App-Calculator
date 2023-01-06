import React, { useEffect } from 'react'
import {View, Text} from 'react-native'

import Style from './Style';
import Ecran from './Ecran';
import Clavier from './Clavier';
import Bouton from './Bouton';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            result: ""
        }
        this.operation = ["+", "-", "."]
        this.operation2 = ["*", "/", "+", "-"]
        this.empty = ""
        
    }

    render() {
    return (
        <View style={Style.rootContainer}>
            <View style={Style.ecranContainer}><Text style={Style.displayText}>{this.state.result}</Text></View>
            <View style={Style.clavierContainer}><Clavier onPressed={(bouton) => this.show(bouton)}/></View> 
        </View>
    )
    }

    show(button) {
        const oldValue = this.state.result.length-1;
        const firstValue = this.state.result.charAt(0);
    

        if(button === "="){
            this.calculate()
        }
        else if(button === "C"){
            this.reset()
        }
        else if(button === "<-"){
            this.retour()
        }
        else if(button === "+/-"){
            if(this.state.result[firstValue] != "-") {
                this.setState({
                    result: "-" + this.state.result
            })}
        }
        else if(button === "/") {
            for(let i = 0; i < this.operation2.length; i++){
            if(this.state.result[oldValue] != "*" && this.state.result[oldValue] != "/" && this.state.result != "") {
                this.setState({
                    result: this.state.result + button
            })}
        }
        }
        else if(button === "*") {
            if(this.state.result[oldValue] != "/" && this.state.result[oldValue] != "*" && this.state.result != "") {
                this.setState({
                    result: this.state.result + button
            })}
        }
        else if(this.operation.indexOf(button) != -1) {
            if(this.state.result[oldValue] != button) {
                this.setState({
                    result: this.state.result + button
            })}
        }
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        try {
            this.setState({
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    retour = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    }
}

export default Calculator