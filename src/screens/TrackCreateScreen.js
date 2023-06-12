import React, {useContext} from 'react';
import {Context as LocationContext} from '../context/LocationContext';
import { NavigationEvents, withNavigationFocus } from 'react-navigation';
import {StyleSheet, Button} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import '../_mockLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({isFocused}) => {
    
    const { addLocation } = useContext(LocationContext);
    const [err] = useLocation(isFocused, addLocation)
    return(
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h2>This is the Track Create Screen</Text>
            <Map />
            
            {err ? <Text>Please enable Location Services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    )
};

export default withNavigationFocus(TrackCreateScreen);