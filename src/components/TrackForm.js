import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Spacer from './Spacer';
import {Context as LocationContext} from '../context/LocationContext';
const TrackForm = () => {
    const {state: {name, recording},
    startRecording, stopRecording, changeName} = useContext(LocationContext);
    return(
        <>
        <Spacer>
            <Input placeholder="Enter Name" onChangeText={(text) => changeName(text)} value={name}/>
            {recording ? <Button title="Stop" onPress={stopRecording}/> : <Button title="Start Recording" onPress={startRecording}/>}
        </Spacer>
        </>
    )
}

const styles = StyleSheet.create({

});

export default TrackForm;