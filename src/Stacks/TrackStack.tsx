import CreateTrack from "@/Screens/CreateTrack";
import Account from "@/Screens/Account";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TrackListStack from "./TrackListStack";
import { useAppSelector } from "@/hooks/hooks";

const Tab = createBottomTabNavigator();
export default function TrackStack() {
  const { username } = useAppSelector((state) => state.user);
  return (
    <Tab.Navigator
      initialRouteName="Tracks"
      screenOptions={{ headerShown: true }}
    >
      <Tab.Screen
        name="Tracks"
        component={TrackListStack} // Stack
        options={{ title: "Track List", headerShown: false }}
      />
      <Tab.Screen
        name="Create"
        component={CreateTrack}
        options={{ title: "Create a Track" }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ title: username }}
      />
    </Tab.Navigator>
  );
}
