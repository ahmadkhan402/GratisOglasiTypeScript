import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import Header from "../../component/header";
import Images from "../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import ProfileItem from "../../component/profileItem";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/params";
import ScreenNames from "../../routes/routes";
import { useNavigation } from "@react-navigation/native";
import { addUser, emptyUserData } from "../../redux/user";
import ConfirmationModal from "../../component/confirmationModal";
import { ScreenWrapper } from "react-native-screen-wrapper";
import Loader from "../../component/loaderComponent";
import { removeCredentials } from "../../utils/Methord";

type navigationProps = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.PROFILE
>;
export default function Profile() {
  const dispatch = useDispatch();
  const navigation = useNavigation<navigationProps>();
  const userData = useSelector((state: any) => state.user.userData);
  const [user, setUser] = useState<any>(userData[0]);
  const [showLogoutModal, setLogoutShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  // setUser(userData);
  // console.log("userData in state", user);
  const handleContactUs = () => {
    Linking.openURL("https://gratisoglasi.ba/contact-us");
  };

  const handleLogout = () => {
    console.log("Logout");

    setTimeout(() => {
      removeCredentials();
      navigation.navigate(ScreenNames.AUTHENTICATION, { showView: "OnLogin" });
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setUser(userData);
  }, [userData]);
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        <Header back={false} title={"Profile"} />
        <View style={styles.userContentView}>
          {user?.profilePicture ? (
            <Image
              source={{ uri: user && user?.profilePicture }}
              style={styles.userImg}
            />
          ) : null}

          <View style={styles.userNameView}>
            <Text style={styles.userName}>
              {user && user?.firstname + " " + user?.lastname}
            </Text>
          </View>

          <Text style={styles.userEmail}>{user && user?.email}</Text>
          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => navigation.navigate(ScreenNames.EDITPROFILE)}
          >
            <Text style={styles.editTxt}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.userFuctionView}>
          <ProfileItem
            icon={<Feather name="lock" size={20} color={AppColors.tangerine} />}
            title="Change Password"
            arrow={true}
            onPress={() => {
              navigation.navigate(ScreenNames.CHANGE_PASSWORD);
            }}
          />
          <ProfileItem
            icon={
              <AntDesign name="setting" size={20} color={AppColors.tangerine} />
            }
            title="Settings"
            arrow={true}
            onPress={() => {
              navigation.navigate(ScreenNames.SETTINGS);
            }}
          />
          <ProfileItem
            icon={
              <AntDesign name="mail" size={20} color={AppColors.tangerine} />
            }
            title="Contact Us"
            arrow={true}
            onPress={handleContactUs}
          />
          <ProfileItem
            icon={
              <MaterialIcons
                name="logout"
                size={20}
                color={AppColors.tangerine}
              />
            }
            title="Logout"
            arrow={true}
            onPress={() => setLogoutShowModal(!showLogoutModal)}
          />
        </View>
        <ConfirmationModal
          visible={showLogoutModal}
          pressCancel={() => setLogoutShowModal(!showLogoutModal)}
          pressAction={() => {
            setLogoutShowModal(false),
              setTimeout(() => {
                setLoading(true);
                handleLogout();
              }, 500);
          }}
          label="Are you sure you want to logout?"
          cancelBtnStyle={styles.cancelBtn}
          actionBtnStyle={styles.actionBtn}
          cancelBtnText="Cancel"
          actionBtnText="Logout"
          inputField={false}
        />
      </View>

      <Loader visible={loading} closed={() => setLoading(false)} />
    </ScreenWrapper>
  );
}
