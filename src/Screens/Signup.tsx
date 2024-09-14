import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import {
  ParamListBase,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";

export default function SignUp() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <View style={style.container}>
      <Text style={style.header}>Sign up for Tracker</Text>
      <Text style={style.label}>Username</Text>
      <TextInput style={style.input} />
      <Text style={style.label}>Password</Text>
      <TextInput secureTextEntry={true} style={style.input} />
      <Pressable style={style.button}>
        <Text style={{ textAlign: "center", fontSize: 18 }}>Sign Up</Text>
      </Pressable>
      <Text style={style.link} onPress={() => navigation.navigate("login")}>
        Already Have an account?{"\n"}Press here to log in
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
