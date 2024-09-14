import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import {
  ParamListBase,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { CredentialsBody } from "store/actions/auth/checkCredentials";
import { changeUsername, changePassword, checkCredentials } from "store";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";

export default function LogIn() {
  const { username, password } = useAppSelector((state) => state.user);
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    const credentials: CredentialsBody = {
      username,
      password,
    };
    dispatch(checkCredentials(credentials));
  };

  return (
    <View style={style.container}>
      <Text style={style.header}>Log in to Tracker</Text>
      <Text style={style.label}>Username</Text>
      <TextInput
        style={style.input}
        value={username}
        onChangeText={(text) => dispatch(changeUsername(text))}
      />
      <Text style={style.label}>Password</Text>
      <TextInput
        style={style.input}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => dispatch(changePassword(text))}
      />
      <Pressable onPress={handleSubmit} style={style.button}>
        <Text style={{ textAlign: "center", fontSize: 18 }}>Log In</Text>
      </Pressable>
      <Text style={style.link} onPress={() => navigation.navigate("signup")}>
        Don't have an account?{"\n"}Press here to sign up
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    margin: 30,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: -1,
    marginBottom: 50,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  link: {
    color: "blue",
  },
});
