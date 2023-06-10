import React, {useEffect, useState} from 'react';
import {StyleSheet, Button} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Map from '../components/Map';
import {requestForegroundPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location';
import '../_mockLocation';

const TrackCreateScreen = () => {
    const [error, setError] = useState(null);
    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            if(!granted){
                throw new Error('Location permission not granted')
            }
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                console.log(location);
            })
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