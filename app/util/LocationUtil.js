import RNLocation from "react-native-location";

export const getCurrentLocation = async () => {

    return new Promise(async (resolve) => {

        RNLocation.configure({
            distanceFilter: 0, // Meters
            desiredAccuracy: {
                ios: "best",
                android: "highAccuracy"
            },
            // Android
            androidProvider: "auto",
            interval: 1000,
            fastestInterval: 100,
            maxWaitTime: 1000,
            // iOS
            activityType: "other",
            allowsBackgroundLocationUpdates: false,
            headingFilter: 1, // Degrees
            headingOrientation: "portrait", 
            pausesLocationUpdatesAutomatically: false,
            showsBackgroundLocationIndicator: false
        });
        const res = await RNLocation.getCurrentPermission()
        console.log('res',res)
        if (res === 'notDetermined' || res === 'denied' || res === 'restricted') {
            const data = await requestPermission()
            console.log('data',data)
            resolve(data)
        } else {
            RNLocation.subscribeToLocationUpdates(locations => {
                const obj = {
                    latitude: locations[0].latitude,
                    longitude: locations[0].longitude
                }
                resolve(obj)
            })
        }
    })
}


const requestPermission = async () => {

    return new Promise(async (resolve) => {
        const res = await RNLocation.requestPermission({
            ios: 'whenInUse',
            android: {
                detail: 'fine',
                rationale: {
                    title: "We need to access your location",
                    message: "We use your location to show where you are on the map",
                    buttonPositive: "OK",
                    buttonNegative: "Cancel"
                }
            }
        })
        if (res) {
            RNLocation.subscribeToLocationUpdates(locations => {
                const obj = {
                    latitude: locations[0].latitude,
                    longitude: locations[0].longitude
                }
                console.log('obj',obj)
                resolve(obj)

            })
        }

    }).catch((e)=>console.log("requestPermission error==="+e))
}



