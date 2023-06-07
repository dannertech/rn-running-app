import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import {SafeAreaView} from 'react-navigation';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext)
    return(
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text>This is the Accounts screen</Text>
            <Button title="Sign Out" onPress={() => signout()}/>
        </SafeAreaView>
    )
};

export default AccountScreen;