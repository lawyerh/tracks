import { setItemAsync } from "expo-secure-store";

export default async function setStorage(
  key: string,
  value: string
): Promise<boolean> {
  try {
    await setItemAsync(key, value);
  } catch (error) {
    return false;
  }
  return true;
}
