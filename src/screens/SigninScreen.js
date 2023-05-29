import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const SigninScreen = (props) => {
    return (
        <View>
            <Text style={{ fontSize: 28 }}>Signup Screen</Text>
            <Button title="Go to Signin" onPress={() => props.navigation.navigate('Signup')}/>
        </View>
    )
};

export default SigninScreen;