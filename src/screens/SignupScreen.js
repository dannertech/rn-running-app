import React, {useState,useContext} from 'react';
import {Text, Input, Button} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext.js';

const SignupScreen = (props) => {
    const {state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <View style={styles.container}>
            <Spacer>
            <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Spacer>
            <Input label="Email" onChangeText={(text) => setEmail(text)} value={email} autoCapitalize='none' autoCorrect={false}/>
            </Spacer>
            <Spacer>
            <Input label="Password" onChangeText={(text) => setPassword(text)} value={password} autoCapitalize='none' autoCorrect={false} secureTextEntry/>
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
            </Spacer>
            <Button title="Sign Up" onPress={() => signup({email, password})}/>
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
    errorMessage: {
        fontSize: 16,
        color: 'red'
    }
})

export default SignupScreen;