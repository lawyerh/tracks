// ** PARENT STACK IMPORTS **
import UserStack from "./UserStack";
import TrackStack from "./TrackStack";
// ** PARENT NAV IMPORTS **
import { NavigationContainer } from "@react-navigation/native";
// ** REDUX IMPORTS **
import { useAppSelector } from "@/hooks/hooks";

export default function Layout() {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  
  return (
    <NavigationContainer>
      {isLoggedIn ? <TrackStack /> : <UserStack />}
    </NavigationContainer>
  );
}
