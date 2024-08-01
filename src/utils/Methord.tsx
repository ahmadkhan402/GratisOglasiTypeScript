import AsyncStorage from "@react-native-async-storage/async-storage";

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

export { setItems, getItems };
