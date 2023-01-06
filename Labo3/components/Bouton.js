import React from 'react';
import {Text, TouchableHighlight} from 'react-native';

import Style from './Style';

class Bouton extends React.Component {
    
    render() {
        return (
            <TouchableHighlight style={Style.inputButton} onPress={() => {this.props.onPressed(this.props.value); }}>
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }
    
}

export default Bouton