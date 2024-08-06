// RootStackParamList.ts

import ScreenNames from "../routes/routes";

export type RootStackParamList = {
  [ScreenNames.HOME]: undefined;
  [ScreenNames.CHAT]: { Email?: string; Password?: string };
  [ScreenNames.ADPOST]?: {
    category?: string | "";
    subCategory?: string | "";
    image?: string;
    condition?: string;
  };
  [ScreenNames.EDITPROFILE]?: undefined;
  [ScreenNames.PROFILE]: undefined;
  [ScreenNames.MYADS]: undefined;
  [ScreenNames.AUTHENTICATION]: { showView?: string | "" };
  [ScreenNames.ADS]: {
    cate?: string;
    latest?: string;
    subCategory?: string | "";
  };
  [ScreenNames.DETAILS]: { adsData?: any };
  [ScreenNames.SUBCATEGORIES]: {
    category?: string;
    subCategory?: string;
    image?: string;
    wantTo?: string;
  };
  [ScreenNames.LOCATION]: undefined;
  [ScreenNames.CATEGORIES]: { wantTo?: string | "" };
  [ScreenNames.EMAIL_VERIFICATION]: {
    stateToVerify?: string | "";
    email?: string;
    userId?: string | "";
  };
  [ScreenNames.CHANGE_PASSWORD]: undefined;
  [ScreenNames.SETTINGS]: undefined;
  [ScreenNames.PRIVACY]: undefined;
  [ScreenNames.MANAGE_ACCOUNT]: undefined;
  [ScreenNames.CHANGE_LANGUAGE]: undefined;
  [ScreenNames.TABHOME]: undefined;
};
