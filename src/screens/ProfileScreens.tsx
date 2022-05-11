import React, { Text } from "react-native";
import {RouteProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";

type Props  = {
    route: RouteProp<RootStackParamList, 'Profile'>
}

export const ProfileScreen = ({ route }: Props) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};