import React, {useContext} from 'react';
import {Text} from 'react-native-elements';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext.js';
import AuthForm from '../components/AuthForm';


const SignupScreen = (props) => {
    const {state, signup } = useContext(AuthContext);
  
    return(
        <View style={styles.container}>
            <AuthForm headerText="Signup for Tracker" errorMessage={state.errorMessage} submitButtonText="Submit" onSubmit={({email, password}) => signup({email,password})}/>
            <TouchableOpacity onPress={() => props.navigation.navigate('Signin')}>
                <Text style={styles.link}>Already have an account? Sign in instead</Text>
            </TouchableOpacity>
        </View>
    )
};

SignupScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
    link: {
        color: 'blue',
    }
})

export default SignupScreen;