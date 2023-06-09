import React, {useState, useEffect} from  'react';
import {Accuracy, requestForegroundPermissionsAsync, watchPositionAsync} from 'expo-location';

export default (shouldTrack, callback) => {
    const [error, setError] = useState(null);
    const [sub, setSubscriber] = useState(null);
    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            if(!granted){
                throw new Error('Location permission not granted')
            }
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, 
            callback
            );
            setSubscriber(sub);
        }catch (error) {
            setError(error);
        }
    }
    useEffect(() => {
        if(shouldTrack){
            startWatching();
        } else {
            sub.remove();
            setSubscriber(null);
        }
    },[shouldTrack])

    return [error];
}