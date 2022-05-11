import {ImageBackground, Text} from "react-native";

const Images = () => {
    return (
        <ImageBackground source={require('../../assets/field-6574455__480.jpg')} style={{width: '100%', height: '100%'}}>
            <Text>Inside</Text>
        </ImageBackground>
    );
}

export default Images;