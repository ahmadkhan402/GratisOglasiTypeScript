import { mainUrl } from "../env";

const getUser = async (id: string) => {
  try {
    let response = await fetch(mainUrl + `user/get/${id}`);
    let json = await response.json();
    if (response.status == 200) {
      return json;
    } else {
      return null;
    }
  } catch (error) {
    console.log("User", error);
    return error;
  }
};

const logInUser = async (email: string, pasword: string) => {
  try {
    let response = await fetch(mainUrl + "auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        password: pasword,
      }),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("User", error);
    return error;
  }
};

const signUpUser = async (
  firstName: string,
  lastName: string,
  email: string,
  pasword: string,
  pNum: string
) => {
  try {
    let response = await fetch(mainUrl + "auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: pasword,
        phoneNo: pNum,
      }),
    });
    let json = await response.json();

    return json;
  } catch (error) {
    console.log("User", error);
    return error;
  }
};

const verifyUser = async (email: string, userId: string) => {
  try {
    let response = await fetch(mainUrl + "email/emailVerification/sendMail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        userId: userId,
      }),
    });
    let json = await response.json();

    return json;
  } catch (error) {
    console.log("User", error);
  }
};

const changePassword = async (id: string, oldPass: string, newPass: string) => {
  try {
    let response = await fetch(mainUrl + `auth/changePassword/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        oldPassword: oldPass,
        newPassword: newPass,
      }),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("User", error);
    return error;
  }
};

const resetPassword = async (email: string) => {
  try {
    let response = await fetch(mainUrl + "password/forgotPassword/sendMail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
      }),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("User", error);
  }
};

const deleteUser = async (id: string, pasword: string) => {
  try {
    let response = await fetch(mainUrl + `user/deleteUserAndItems/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: pasword,
      }),
    });
    let json = await response.json();

    return json;
  } catch (error) {
    console.log("User", error);
    return error;
  }
};

const updatePrivacy = async (id: string, showAds: boolean) => {
  try {
    let response = await fetch(mainUrl + `user/updateShowAllAds/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        showAllAds: showAds,
      }),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("User", error);
    return error;
  }
};

const editProfile = async (user: string, id: string) => {
  try {
    let response = await fetch(mainUrl + `user/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: user,
      redirect: "follow",
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("User", error);
    return error;
  }
};

const getReceiverList = async (lst: any) => {
  try {
    let response = await fetch(mainUrl + "user/getUsersByIds", {
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
const reportUser = async (reportData: any) => {
  try {
    let response = await fetch(mainUrl + `email/report/sendReport`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(reportData),
    });

    let json = await response.json();
    return json;
  } catch (error) {
    console.log("User", error);
    return error;
  }
};

const resendVerificationEmail = async (email: string) => {
  try {
    let response = await fetch(
      mainUrl + "email/resendEmailVerification/sendMail",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: email,
        }),
      }
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("User", error);
  }
};
const googleLoginUser = async (token: string) => {
  try {
    let response = await fetch(mainUrl + "GoogleAuth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        idToken: token,
      }),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("User", error);
  }
};
export {
  getUser,
  logInUser,
  signUpUser,
  verifyUser,
  changePassword,
  resetPassword,
  deleteUser,
  updatePrivacy,
  editProfile,
  getReceiverList,
  resendVerificationEmail,
  reportUser,
  googleLoginUser,
};
