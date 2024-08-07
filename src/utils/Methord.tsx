import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

const subString = (str: string, start: number, end: number) => {
  return str.substring(start, end);
};

export default subString;

const setItems = (key: string, item: any) => {
  const data = AsyncStorage.setItem(key, item);
  return data;
};

const getItems = (key: string) => {
  const data = AsyncStorage.getItem(key);
  return data;
};

const storeCredentials = async (email: string, password: string) => {
  try {
    await SecureStore.setItemAsync("userEmail", email);
    await SecureStore.setItemAsync("userPassword", password);
    console.log("Credentials stored successfully");
  } catch (error) {
    console.error("Error storing credentials", error);
  }
};

const getCredentials = async () => {
  try {
    const email = await SecureStore.getItemAsync("userEmail");
    const password = await SecureStore.getItemAsync("userPassword");
    if (email && password) {
      return { email, password };
    }
    return null;
  } catch (error) {
    console.error("Error retrieving credentials", error);
    return null;
  }
};
const removeCredentials = async () => {
  try {
    await SecureStore.deleteItemAsync("userEmail");
    await SecureStore.deleteItemAsync("userPassword");
    console.log("Credentials removed successfully");
  } catch (error) {
    console.error("Error removing credentials", error);
  }
};

export {
  setItems,
  getItems,
  storeCredentials,
  getCredentials,
  removeCredentials,
};
