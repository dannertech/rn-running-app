import React, {useContext} from 'react';
import {NavigationEvents} from 'react-navigation';
import {StyleSheet, View, Text, Button} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext';


const SigninScreen = (props) => {
    const {state, signin, clearErrorMessage} = useContext(Context);

    return (
        <View style={styles.container}>
            <NavigationEvents 
            onWillFocus={clearErrorMessage}
            />
            <AuthForm headerText="Sign In to your Account" errorMessage={state.errorMessage} onSubmit={({email, password}) => signin({email,password})} submitButtonText="Signin"/>
            <NavLink routeName="Signup" text="Don't have an account? Signup here" />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

export default SigninScreen;