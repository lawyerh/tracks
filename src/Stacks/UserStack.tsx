import SignUp from "@/Screens/Signup";
import LogIn from "@/Screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={LogIn} options={{title: "Log In"}} />
      <Stack.Screen name="signup" component={SignUp} options={{title: "Sign Up"}}/>
    </Stack.Navigator>
  );
}
