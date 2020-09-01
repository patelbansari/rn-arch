import React, { useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getCurrentLocation } from '../util/LocationUtil';
import { useDispatch, useSelector } from 'react-redux';
import * as CommonAction from '../redux/action/CommonAction'

export const Home = () => {
    const navigation = useNavigation()
    const dispatch  = useDispatch()
    let userCurrentLocation = useSelector(state => state.CommonReducers.userCurrentLocation)
    console.log('userCurrentLocation',userCurrentLocation)

    const fetchCurrentLocation = async () => {
        const location = await getCurrentLocation()
        dispatch(CommonAction.updateUserCurrentLocation(location));
        console.log('location', location)
    }

    useEffect(() => {
        fetchCurrentLocation()
    }, [])


    return (
        <View>
            <Text style={{
                alignSelf: 'center', textAlign: 'center',
                color: '#ffffff', margin: 20, backgroundColor: '#000000'
                , padding: 10, width: 100
            }}
                onPress={() => {
                    if(userCurrentLocation.latitude){
                        navigation.navigate('Location')
                    }else{
                        Alert.alert("Please wait we are fetching your location...")
                    }
                }}>Go to map</Text>
        </View>
    )
}