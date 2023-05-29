import React from 'react';

import {StyleSheet, View, Text, Button} from 'react-native';

const TrackListScreen = (props) => {
    return (
        <View>
            <Text>This is the Track Detail Screen</Text>
            <Button title="Go to Track List Screen" onPress={() => props.navigation.navigate('TrackDetail')}/>
        </View>
    )
};

export default TrackListScreen;