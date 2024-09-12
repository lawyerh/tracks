import TrackList from "@/Screens/TrackList";
import CreateTrack from "@/Screens/CreateTrack";
import Account from "@/Screens/Account";
import TrackDetail from "@/Screens/TrackDetail";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
export default function TrackStack() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen
        name="Tracks"
        component={TrackList} // Stack
        // options={{ title: "Track List" }}
      />
      <Tab.Screen
        name="Create"
        component={CreateTrack}
        options={{ title: "Create a Track" }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ title: "Account Settings" }}
      />
    </Tab.Navigator>
  );
}
