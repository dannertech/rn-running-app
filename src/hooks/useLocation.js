import React, {useState, useEffect} from  'react';
import {Accuracy, requestForegroundPermissionsAsync, watchPositionAsync} from 'expo-location';

export default (shouldTrack, callback) => {
    const [error, setError] = useState(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            if(!granted){
                throw new Error('Location permission not granted')
            }
            const subscriber = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
               console.log(location)
               callback;
            });
            
        }catch (error) {
            setError(error);
        }
    }
    useEffect(() => {
        startWatching();
    },[shouldTrack])

    return [err];
}