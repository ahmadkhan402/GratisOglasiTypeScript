import { showMessage } from "react-native-flash-message";
import * as SecureStore from "expo-secure-store";

export function successMessage(message = "", description = "") {
  showMessage({
    message: message,
    description: description,
    type: "success",
    duration: 6000,
  });
}

export function errorMessage(message = "", description = "") {
  showMessage({
    message: message,
    description: description,
    type: "danger",
    duration: 6000,
  });
}

export function infoMessage(message = "", description = "") {
  showMessage({
    message: message,
    description: description,
    type: "info",
    duration: 6000,
  });
}

export async function saveCredentials(key: string, value: string) {
  const result = await SecureStore.setItemAsync(key, value);
}
