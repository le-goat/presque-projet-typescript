import {Button, StyleSheet, Text, View, SafeAreaView, ScrollView, Image} from "react-native";
import {FunctionComponent} from "react";
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";

type Props = {
    navigation: NavigationProp<RootStackParamList>;
}

export const HomeScreen: FunctionComponent<Props> = ({navigation}) => {
    return (
        <SafeAreaView style={{height: '100%'}}>
            <ScrollView style={{height: '100%'}}>
                <View style={{height: 300}}>
                    <View style={{height: '15%', backgroundColor: 'powderblue'}}/>
                    <View style={{width: '66%', height: '35%', backgroundColor: 'skyblue'}}/>
                    <View style={{width: '33%', height: '50%', backgroundColor: 'steelblue'}}/>
                </View>

                {/*<Image source={require('../../assets/1519855918965.jpeg')} />*/}
                <Image source={{uri: 'https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY='}}
                style={{width: '100%', height: 'auto'}}/>

                <Button
                    title="Go to Jane's profile"
                    onPress={() =>
                        navigation.navigate('Profile', {name: 'Jane'})
                    }/>
                <Button
                    title="Test screen"
                    onPress={() =>
                        navigation.navigate('Test')
                    }/>
                <Button
                    title="Image"
                    onPress={() =>
                        navigation.navigate('Images')
                    }/>
                <Button
                    title="Test Touchable"
                    onPress={() =>
                        navigation.navigate('TouchableHighlightExample')
                    }/>
                <Button
                    title="Movies"
                    onPress={() =>
                        navigation.navigate('Movies')
                    }/>
                <Button
                    title="Screen Sizes"
                    onPress={() =>
                        navigation.navigate('ScreensSizes')
                    }/>

                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigBlue}>just bigBlue</Text>
                <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
                <Text style={[styles.red, styles.bigBlue]}>red then bigBlue</Text>
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    }
});