// RootStackParamList.ts

import ScreenNames from "../routes/routes";

export type RootStackParamList = {
  [ScreenNames.HOME]: undefined;
  [ScreenNames.CHAT]: { Email?: string; Password?: string };
  [ScreenNames.ADPOST]?: {
    category?: string | "";
    subCategory?: string | "";
    image: string;
    condition: string;
  };
  [ScreenNames.EDITPROFILE]?: undefined;
  [ScreenNames.PROFILE]: undefined;
  [ScreenNames.MYADS]: undefined;
  [ScreenNames.AUTHENTICATION]: undefined;
  [ScreenNames.ADS]: { cate?: string; subCate?: string };
  [ScreenNames.SUBCATEGORIES]: {
    category?: string;
    subCategory?: string;
    image: string;
  };
};
