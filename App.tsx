
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "./src/screens/HomeScreens";
import {ProfileScreen} from "./src/screens/ProfileScreens";
import {JustifyContentBasics} from "./src/screens/TestScreens";
import FlexWrapLayout from "./src/screens/FlexScreens";
import Images from "./src/screens/Images";
import TouchableHighlightExample from "./src/screens/TestTouchableScreens";
import {MoviesPage} from "./src/screens/MoviesPage";
import {CustomMovie} from "./src/screens/CustomMovie";
import {ScreensSizesScreen} from "./src/screens/ScreensSizesScreen";
const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'c\'est dingue' }}/>
                <Stack.Screen name='Profile' component={ProfileScreen} />
                <Stack.Screen name='Test' component={JustifyContentBasics} />
                <Stack.Screen name='Flex' component={FlexWrapLayout} />
                <Stack.Screen name='Images' component={Images} />
                <Stack.Screen name='TouchableHighlightExample' component={TouchableHighlightExample} />
                <Stack.Screen name='Movies' component={MoviesPage} />
                <Stack.Screen name='CustomMovie' component={CustomMovie} />
                <Stack.Screen name='ScreensSizes' component={ScreensSizesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

