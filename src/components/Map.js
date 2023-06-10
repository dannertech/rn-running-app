import React, {useContext} from 'react';
import {Context as LocationContext} from '../context/LocationContext'
import {Text, StyleSheet} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';

const Map = () => {
    const { state } = useContext(LocationContext);
    
    return(
        <MapView style={styles.map}
        initialRegion={{
            latitude: 33.58765690248779,
            longitude: -82.15223148036128,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
        >
           
        </MapView>
    )
};

const styles = StyleSheet.create({
    map : {
        height: 300
    }
});

export default Map;