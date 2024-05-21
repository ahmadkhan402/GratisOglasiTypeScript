// RootStackParamList.ts

import ScreenNames from "../routes/routes";

export type RootStackParamList = {
  [ScreenNames.Home]: undefined;
  [ScreenNames.Chat]: { Email?: string; Password?: string };
  [ScreenNames.AdPost]?: undefined;
  [ScreenNames.EditProfile]?: undefined;
  [ScreenNames.Profile]: undefined;
  [ScreenNames.MyAds]: undefined;
  [ScreenNames.Authentication]: undefined;
};
