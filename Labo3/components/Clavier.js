import React from 'react';
import {Text, View, style} from 'react-native';

import Bouton from './Bouton';
import Style from './Style';

class Clavier extends React.Component {
    
    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.inputRow}>
                    <Bouton value ='C' onPressed={(bouton) => this.props.onPressed(bouton)}/>
                    <Bouton value ='+/-' onPressed={(bouton) => this.props.onPressed(bouton)}/>
                    <Bouton value ='<-' onPressed={(bouton) => this.props.onPressed(bouton)}/>
                    <Bouton value ='/' onPressed={(bouton) => this.props.onPressed(bouton)}/>
                </View>
                <View style={Style.inputRow}>
                    <Bouton value ='7' onPressed={(bouton) => this.props.onPressed(bouton)}/>
                    <Bouton value ='8' onPressed={(bouton) => this.props.onPressed(bouton)}/>
                    <Bouton value ='9' onPressed={(bouton) => this.props.onPressed(bouton)}/>
                    <Bouton value ='*' onPressed={(bouton) => this.props.onPressed(bouton)}/>
                </View>
                <View style={Style.inputRow}>
                    <Bouton value ='4' onPressed={(bouton) => this.props.onPressed(bouton)}/>
                    <Bouton value ='5' onPressed={(bouton) => this.props.onPressed(bouton)}/>
                    <Bouton value ='6' onPressed={(bouton) => this.props.onPressed(bouton)}/>
                    <Bouton value ='-' onPressed={(bouton) => this.props.onPressed(bouton)}/>
                </View>
                <View style={Style.inputRow}>
                    <Bouton value ='1' onPressed={(bouton) => this.props.onPressed(bouton)}/>
                    <Bouton value ='2' onPressed={(bouton) => this.props.onPressed(bouton)}/>
                    <Bouton value ='3' onPressed={(bouton) => this.props.onPressed(bouton)}/>
                    <Bouton value ='+' onPressed={(bouton) => this.props.onPressed(bouton)}/>
                </View>
                <View style={Style.inputRow2}>
                    <Bouton style={{width: 50}} value ='0' onPressed={(bouton) => this.props.onPressed(bouton)}/>
                    <Bouton style={{flex: 1}} value ='.' onPressed={(bouton) => this.props.onPressed(bouton)}/>
                    <Bouton style={{flex: 2}} value ='=' onPressed={(bouton) => this.props.onPressed(bouton)}/>
                </View>
            </View>
        )
    }

}

export default Clavier
