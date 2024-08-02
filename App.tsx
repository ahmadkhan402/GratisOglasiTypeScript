import React from "react";
import "intl-pluralrules";
import { LogBox, StyleSheet, Text, View, YellowBox } from "react-native";
import Route from "./src/routes";
import BottomTab from "./src/routes/Bottom";
import { AuthScreen } from "./src/screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { I18nextProvider } from "react-i18next";
import i18n from "./src/translation";
import FlashMessage from "react-native-flash-message";

export default function App() {
  React.useLayoutEffect(() => {
    LogBox.ignoreAllLogs(true);
  }, []);

  return (
    <SafeAreaProvider>
      <I18nextProvider i18n={i18n}>
        <Route />
        <FlashMessage position="top" />
      </I18nextProvider>
    </SafeAreaProvider>
  );
}
