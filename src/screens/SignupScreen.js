import React, {useState} from 'react';
import {Text, Input, Button} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import Spacer from '../components/Spacer';

const SignupScreen = (props) => {
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
            </Spacer>
            <Button title="Sign Up"/>
        </View>
    )
};

SignupScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
})

export default SignupScreen;