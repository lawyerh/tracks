import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import {
  ParamListBase,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { CredentialsBody } from "types/Credentials";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";

export default function SignUp() {
  const { username, password, error } = useAppSelector((state) => state.user);
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    const credentials: CredentialsBody = {
      username,
      password,
    };
    // dispatch(checkCredentials(credentials));
  };

  return (
    <View style={style.container}>
      <Text style={style.header}>Sign up for Tracker</Text>
      {error ? <Text style={style.error}>{error}</Text> : null}
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
  error: {
    fontSize: 18,
    color: "red",
    marginBottom: 10,
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
