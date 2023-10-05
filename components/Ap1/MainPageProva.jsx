import Questao01 from "./Questao01";
import Questao02 from "./Questao02";

import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const NativeStack = createNativeStackNavigator()


const MainPageProva = () => {
    return (
        <View>
            <NavigationContainer>
                <NativeStack.Navigator screenOptions={{ headerShown: false }}>

                    <NativeStack.Group>
                        <NativeStack.Screen name="nubank" component={Questao01} />
                    </NativeStack.Group>



                    <NativeStack.Group screenOptions={{ presentation: "modal" }}>
                        <NativeStack.Screen name="modalNubank" component={Questao02} />
                    </NativeStack.Group>

                </NativeStack.Navigator>
            </NavigationContainer>

        </View>
    );
}

export default MainPageProva;