import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Spacer from './Spacer'
const TrackForm = () => {
    return(
        <>
        <Spacer>
            <Input />
            <Button title="Start Recording"/>
        </Spacer>
        </>
    )
}

const styles = StyleSheet.create({

});

export default TrackForm;