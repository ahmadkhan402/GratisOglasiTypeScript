import React from 'react';
import { LogBox, StyleSheet, Text, View, YellowBox } from "react-native";
import Route from "./src/routes";
import BottomTab from "./src/routes/Bottom";
import { AuthScreen } from "./src/screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  React.useLayoutEffect(() => {
    LogBox.ignoreAllLogs(true);
  }, []);

  return (
    <SafeAreaProvider>
       <Route />
    </SafeAreaProvider>
  );
}

