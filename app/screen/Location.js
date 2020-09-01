import { View, Text } from 'react-native';
import React from 'react'
import { useSelector } from 'react-redux';
import MapView from 'react-native-maps';

export const Location = () => {
    let userCurrentLocation = useSelector(state => state.CommonReducers.userCurrentLocation)

    return (
        <MapView
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
    )
}