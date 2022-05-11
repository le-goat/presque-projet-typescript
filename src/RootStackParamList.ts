import {Movie} from "./types/Movie";

export type RootStackParamList = {
    Home: undefined;
    Profile: {name: string}
    Test: undefined;
    Flex: undefined;
    Images: undefined;
    TouchableHighlightExample: undefined;
    Movies: undefined;
    CustomMovie: {infos: Movie};
    ScreensSizes: undefined;
}