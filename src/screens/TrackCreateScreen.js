import React, {useEffect, useState, useContext} from 'react';
import {Context as LocationContext} from '../context/LocationContext';
import {StyleSheet, Button} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Map from '../components/Map';
import {requestForegroundPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location';
import '../_mockLocation';

const TrackCreateScreen = () => {
    const [error, setError] = useState(null);
    const { addLocation } = useContext(LocationContext);
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
               // console.log(location);
               addLocation(location);
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