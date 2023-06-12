import React, {useContext} from 'react';
import {Context as LocationContext} from '../context/LocationContext'
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';

const Map = () => {
    const { state: { currentLocation } } = useContext(LocationContext);

    const initialLocation = {
        longitude: -122.0312186,
        latitude: 37.33233141
    }
    
    if(!currentLocation) {
        return <ActivityIndicator
        size="large"
        style={{marginTop: 200}}
        />
    }
    return(
        <MapView style={styles.map}
        initialRegion={{
            ...initialLocation,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
        
        >
           <Circle center={currentLocation.coords} radius={120} strokeColor='rgba(158,158,255, 1.0)' fillColor='rgba(158,158,255,0.3)'/>
        </MapView>
    )
};

const styles = StyleSheet.create({
    map : {
        height: 300
    }
});

export default Map;