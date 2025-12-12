import {createStackNavigator} from "@react-navigation/stack"
import { Routes } from "./Routes"
import Home from "../screens/Home/Home"

const Stack = createStackNavigator()

const MainNavigation = () =>{
    console.log("Main Navigation")
    return <Stack.Navigator>
        <Stack.Screen name={Routes.Home} component={Home}/>
    </Stack.Navigator>
}

export default MainNavigation