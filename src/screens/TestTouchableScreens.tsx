import React, {useState} from "react";
import {StyleSheet, Text, /*TouchableHighlight,*/ TouchableOpacity, View} from "react-native";

const TouchableHighlightExample = () => {

    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
                <Text>Count: {count}</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text>Press Here</Text>
            </TouchableOpacity>
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
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }



//     const [count, setCount] = useState(0);
//     const onPress = () => setCount(count + 1);
//
//     return (
//         <View style={styles.container}>
//             <TouchableHighlight onPress={onPress}>
//                 <View style={styles.button}>
//                     <Text>Touch Here</Text>
//                 </View>
//             </TouchableHighlight>
//             <View style={styles.countContainer}>
//                 <Text style={styles.countText}>
//                     {count || null}
//                 </Text>
//             </View>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         paddingHorizontal: 10
//     },
//     button: {
//         alignItems: "center",
//         backgroundColor: "#DDDDDD",
//         padding: 10
//     },
//     countContainer: {
//         alignItems: "center",
//         padding: 10
//     },
//     countText: {
//         color: "#FF00FF"
//     }
});

export default TouchableHighlightExample;