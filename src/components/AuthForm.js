import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <>
            <Spacer>
            <Text h3>{props.headerText}</Text>
            </Spacer>
            <Spacer>
            <Input label="Email" onChangeText={(text) => setEmail(text)} value={email} autoCapitalize='none' autoCorrect={false}/>
            </Spacer>
            <Spacer>
            <Input label="Password" onChangeText={(text) => setPassword(text)} value={password} autoCapitalize='none' autoCorrect={false} secureTextEntry/>
            {props.errorMessage ? <Text style={styles.errorMessage}>{props.errorMessage}</Text> : null}
            </Spacer>
            <Button title={props.submitButtonText} onPress={() => props.onSubmit({email, password})}/>
        </>
    )
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red'
    },
});

export default AuthForm;