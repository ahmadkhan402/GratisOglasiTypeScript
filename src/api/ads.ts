import { mainUrl } from "../env";

const getLatestAds = async () => {
  try {
    let response = await fetch(mainUrl + "item/latest");
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getTopAds = async (cate: string, page: number, limit: number) => {
  try {
    let response = await fetch(mainUrl + `item/newSearch`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: cate,
        page: page,
        limit: limit,
      }),
    });

    const json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getAllLatestAds = async (pageNum: number) => {
  try {
    let response = await fetch(mainUrl + `item/getAll?page=${pageNum}`);
    let json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getMyAds = async (query: object, page: number) => {
  try {
    let response = await fetch(mainUrl + "item/findItem", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,

        page: page,
      }),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getFavorites = async (userid: string, pageNum: number) => {
  try {
    let response = await fetch(
      mainUrl + `item/favorites/get/${userid}?page=${pageNum}`
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getCategoryAds = async (
  cate: string,
  subCate: string,
  pageNumber: number
) => {
  try {
    let response = await fetch(mainUrl + "item/newSearch", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: cate,
        sub_category: subCate,
        page: pageNumber,
      }),
    });
    let json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const searchAds = async (item: string, pageNum: number) => {
  try {
    let response = await fetch(mainUrl + "item/newSearch", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        baseSearch: item,
        page: pageNum,
      }),
    });
    let json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const searchAdsByCategory = async (
  category: string,
  searchTerm: string,
  pageNum: number
) => {
  try {
    let response = await fetch(mainUrl + "item/newSearch", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        baseSearch: searchTerm,
        category: category,
        page: pageNum,
      }),
    });
    let json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const searchAdsBySubCategory = async (
  subCategory: string,
  searchTerm: string,
  pageNum: number
) => {
  try {
    let response = await fetch(mainUrl + "item/newSearch", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        baseSearch: searchTerm,
        sub_category: subCategory,
        page: pageNum,
      }),
    });
    let json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const filterAds = async (details: object) => {
  try {
    let response = await fetch(mainUrl + "item/newSearch", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });
    let json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export {
  getLatestAds,
  getTopAds,
  getAllLatestAds,
  getMyAds,
  getFavorites,
  getCategoryAds,
  searchAds,
  searchAdsByCategory,
  searchAdsBySubCategory,
  filterAds,
};
