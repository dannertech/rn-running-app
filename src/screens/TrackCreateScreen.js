import React from 'react';
import {StyleSheet, Button} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Map from '../components/Map';

const TrackCreateScreen = () => {
    return(
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h2>This is the Track Create Screen</Text>
            <Map />
        </SafeAreaView>
    )
};

export default TrackCreateScreen;