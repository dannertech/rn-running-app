import React, {useEffect, useState} from 'react';
import {StyleSheet, Button} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Map from '../components/Map';
import {requestForegroundPermissionsAsync} from 'expo-location';

const TrackCreateScreen = () => {
    const [error, setError] = useState(null);
    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
        }catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        startWatching();
    },[])
    return(
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h2>This is the Track Create Screen</Text>
            <Map />
            {error ? <Text>Please enable Location Services</Text> : null}
        </SafeAreaView>
    )
};

export default TrackCreateScreen;