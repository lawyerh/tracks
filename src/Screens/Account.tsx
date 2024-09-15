import { View, Text, Pressable } from "react-native";
import { logout } from "store";
import { useAppDispatch } from "@/hooks/hooks";
export default function Account() {
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(logout());
  };

  return (
    <View>
      <Pressable onPress={handlePress}>
        <Text>Sign out</Text>
      </Pressable>
    </View>
  );
}
