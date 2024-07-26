import { mainUrl } from "../env";

const getCategories = async () => {
  try {
    let response = await fetch(mainUrl + "info/categories/get");
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { getCategories };
