import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {GestureHandlerRootView} from "react-native-gesture-handler";
export default function MainView() {
    const insets = useSafeAreaInsets();
    return(
        <GestureHandlerRootView style={{
            flex:1,paddingTop:insets.top,
            paddingBottom:insets.bottom,
            paddingLeft:insets.left,
            paddingRight:insets.right
            }}>
            <View>
                <Text>MainView</Text>
            </View>
        </GestureHandlerRootView>
    )
}