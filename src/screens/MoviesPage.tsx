import {useEffect} from "react";
import * as React from "react"
import {getMoviesFromApi} from "../api/Movies";
import {FlatList, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";
import {Movie} from "../types/Movie";

export const MoviesPage = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    const [ moviesList, setMoviesList ] = React.useState<Movie[]>()
    console.log("movies :", moviesList)

    useEffect(() => {
        getMoviesFromApi()
            .then((movies) => setMoviesList(movies));
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={moviesList}
                renderItem={({item}) => (
                    <TouchableHighlight onPress={() => {
                        navigation.navigate('CustomMovie', {infos: item})
                    }} style={styles.button}>
                        <Text>{item.title}</Text>
                    </TouchableHighlight>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        // backgroundColor: "#DDDDDD",
        borderBottomColor: "#DDDDDD",
        borderBottomWidth: 1,
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});
