import { deleteItemAsync } from "expo-secure-store";

export default async function deleteStorage(key: string) {
    await deleteItemAsync(key);
}