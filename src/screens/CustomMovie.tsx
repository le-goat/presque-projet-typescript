import * as React from "react";
import {StyleSheet, Text} from "react-native";
import {RouteProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";

type Props  = {
    route: RouteProp<RootStackParamList, 'CustomMovie'>
}

export const CustomMovie = ({ route }: Props) => {
    return (
        <Text style={styles.box}>
            <Text style={styles.element}>{route.params.infos.title}</Text>
            <Text style={styles.element}>{route.params.infos.id}</Text>
            <Text style={styles.element}>{route.params.infos.releaseYear}</Text>
        </Text>
    )
};

const styles = StyleSheet.create({
    box: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        paddingHorizontal: 10
    },
    element: {
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        alignItems: "center",
        padding: 10
    }
})