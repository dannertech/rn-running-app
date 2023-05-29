import React from 'react';

import {StyleSheet, View, Text, Button} from 'react-native';

const TrackDetailScreen = (props) => {
    return (
        <View>
            <Text>This is the Track Detail Screen</Text>
            <Button title="Go to TrackList" onPress={() => props.navigation.navigate('TrackList')}/>
        </View>
    )
};

export default TrackDetailScreen;