import TrackDetail from "@/Screens/TrackDetail";
import TrackList from "@/Screens/TrackList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function TrackListStack() {
  return (
    <Stack.Navigator
      initialRouteName="List"
      //   screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="List"
        component={TrackList}
        options={{ title: "Track List" }}
      />
      <Stack.Screen
        name="Detail"
        component={TrackDetail}
        options={{ title: "(NAME OF TRACK)" }}
      />
    </Stack.Navigator>
  );
}
