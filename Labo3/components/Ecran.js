import React from 'react'
import { View, Text } from 'react-native'

import Style from './Style'

class Ecran extends React.Component {
    
    render() {
        return (
            <View style={Style.ecranContainer}>
                <Text style={Style.displayText}></Text>
            </View>
            
        )
    }
    
}

export default Ecran