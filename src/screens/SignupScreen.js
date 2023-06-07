import React, {useContext} from 'react';
import {Text} from 'react-native-elements';
import {NavigationEvents} from 'react-navigation';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext.js';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink.js';


const SignupScreen = (props) => {
    const {state, signup,clearErrorMessage} = useContext(AuthContext);

  
    return(
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm headerText="Signup for Tracker" errorMessage={state.errorMessage} submitButtonText="Submit" onSubmit={({email, password}) => signup({email,password})}/>
            <NavLink text="Already have an account? Sign in instead" routeName="Signin"/>
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
})

export default SignupScreen;