// ** PARENT STACK IMPORTS **
import UserStack from "./UserStack";
import TrackStack from "./TrackStack";
// ** PARENT NAV IMPORTS **
import { NavigationContainer } from "@react-navigation/native";
 // ** REDUX IMPORTS **
import { useSelector } from "react-redux";
import { Store } from "store";

export default function Layout() {
  const user = useSelector((state: Store) => state.user.id);

  return (
    <NavigationContainer >
      {user === null ? (
        <UserStack />
      ) : <TrackStack />
      }
    </NavigationContainer>
  );
}
