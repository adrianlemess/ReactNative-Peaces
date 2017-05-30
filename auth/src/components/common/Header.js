//Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component

//component name
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle} > {props.headerTitle} </Text>
        </View >
    );
};

//Styling app
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',

        elevation: 3,
        position: 'relative',
        //IOS only
        shadowColor: '#000',
        shadowRadius: 1,
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 1
    },
    textStyle: {
        fontSize: 20,

    }
};

//Make the component available to other parts of the app
export { Header };
