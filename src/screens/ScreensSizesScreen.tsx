import '@expo/match-media';
import {useMediaQuery} from "react-responsive";
import * as ScreenOrientation from 'expo-screen-orientation';
import {Text, View} from "react-native";
import {useEffect} from "react";

export function ScreensSizesScreen() {

    useEffect(() => {
        ScreenOrientation.unlockAsync();
    }, []);

    const isMobile = useMediaQuery({
        maxDeviceWidth: 480,
    });

    const isTablet = useMediaQuery({
        minDeviceWidth: 480,
        maxDeviceWidth: 1024,
    });

    return <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        {
            isMobile && <Text>Je suis actuellement sur un mobile !</Text>
        }
        {
            isTablet && <Text>Je suis actuellement sur une tablette !</Text>
        }
        {
            !isMobile && !isTablet && <Text>Je suis actuellement sur un desktop !</Text>
        }
    </View>
}
