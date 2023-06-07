import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

const NavLink = (props) => {
    return(
        <>
            <TouchableOpacity onPress={() => props.navigation.navigate(`${props.routeName}`)}>
                <Text style={styles.link}>{props.text}</Text>
            </TouchableOpacity>
        </>
    )
};

const styles = StyleSheet.create({
    link: {
        color: 'blue',
    }
});

export default withNavigation(NavLink);