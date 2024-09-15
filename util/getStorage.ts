import { getItem } from "expo-secure-store";

export default function getStorage(key: string) {
  let result;
  try {
    result = getItem(key);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  if (result) return result;
  else return false;
}
