import { mainUrl } from "../env";

const getItem = async (id: string) => {
  try {
    let response = await fetch(mainUrl + `item/get/${id}`);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Get Item", error);
    return error;
  }
};

const getItemList = async (lst: any) => {
  try {
    let response = await fetch(mainUrl + "item/getItemsByIds", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ids: lst,
      }),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("User", error);
    return error;
  }
};

const getMakeBycategory = async (cate: string, subCate: string) => {
  try {
    let response = await fetch(mainUrl + "info/models/getMakes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: cate,
        sub_category: subCate,
      }),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Item getMakeBycategory", error);
    return error;
  }
};

const getModel = async (subCategory: string, make: string) => {
  try {
    let response = await fetch(
      mainUrl + `info/models/get_${subCategory}Models/${make}`
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Item getModel", error);
    return error;
  }
};

const getTypeBycategory = async (category: string, subCategory: string) => {
  try {
    let response = await fetch(mainUrl + "info/models/getTypes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: category,
        sub_category: subCategory,
      }),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Item getTypeBycategory", error);
    return error;
  }
};

const adPost = async (data: any) => {
  try {
    let response = await fetch(mainUrl + "item/add", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: data,
      redirect: "follow",
    });
    let json = await response.json();

    return json;
  } catch (error) {
    console.log("Item adPost", error);
    return error;
  }
};

const refreshAd = async (itemid: string) => {
  try {
    let response = await fetch(mainUrl + `item/refreshCreatedAt/${itemid}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Item refreshAd", error);
    return error;
  }
};

const deleteItem = async (id: string) => {
  try {
    let response = await fetch(mainUrl + `item/delete/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    let json = await response.json();
    console.log("Delete Response", json);

    return json;
  } catch (error) {
    console.log("Item deleteItem", error);
  }
};

const muteItem = async (id: string) => {
  try {
    let response = await fetch(mainUrl + `item/hide/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Item muteItem", error);
  }
};

const unMuteItem = async (id: string) => {
  try {
    let response = await fetch(mainUrl + `item/unhide/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Item unMuteItem", error);
  }
};

const editImages = async (data: string) => {
  try {
    let response = await fetch(mainUrl + "image/upload", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: data,
      redirect: "follow",
    });
    let json = await response.json();

    return json;
  } catch (error) {
    console.log("Item editImages", error);
    return error;
  }
};

const editItem = async (id: string, data: any) => {
  try {
    let response = await fetch(mainUrl + `item/update/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Item editItem", error);
  }
};

const viewItem = async (itemId: string, userId: string) => {
  try {
    let response = await fetch(
      mainUrl + `item/increaseViewCount/${itemId}/${userId}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status == 200) {
      let json = await response.json();
      return json;
    } else {
      return null;
    }
  } catch (error) {
    console.log("Item viewItem", error);
  }
};

export {
  getItem,
  getMakeBycategory,
  getModel,
  getTypeBycategory,
  adPost,
  deleteItem,
  refreshAd,
  muteItem,
  unMuteItem,
  editImages,
  editItem,
  viewItem,
  getItemList,
};
