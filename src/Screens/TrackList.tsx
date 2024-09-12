import { View, Text } from "react-native";
import {
  ParamListBase,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";

export default function TrackList() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <View>
      <Text onPress={() => navigation.navigate("Detail")}>TrackList</Text>
    </View>
  );
}
