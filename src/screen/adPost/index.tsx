import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ScreenWrapper } from "react-native-screen-wrapper";
import AppColors from "../../utils/AppColors";

import styles from "./styles";
import * as ImagePicker from "expo-image-picker";
import { useTranslation } from "react-i18next";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { getCategories } from "../../api/categories";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ToggleSwitch from "toggle-switch-react-native";

import { getMakeBycategory, getModel } from "../../api/item";
import { RootStackParamList } from "../../utils/params";
import Header from "../../component/header";
import { height } from "../../utils/Dimension";
import SingleCheckBox from "../../component/singleCheckBox";
import InputText from "../../component/inputText";
import ScreenNames from "../../routes/routes";
import fieldConfigurations from "../../utils/CategoriesFieldConfig";
import ChangeNumber from "../../component/changeNumber";
import Button from "../../component/button";
import DropDownMenu from "../../component/dropDownMenu";
import CustomModal from "../../component/customModal";

type AdPostProps = RouteProp<RootStackParamList, ScreenNames.ADPOST>;

export default function AdPost() {
  const { t } = useTranslation();
  const route = useRoute<AdPostProps>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  // const { category, subCategory, image, condition } = route.params;
  let category = route?.params?.category || "";
  let subCategory = route?.params?.subCategory || "";
  let image = route?.params?.image || "";
  let condition = route?.params?.condition || "";

  const [selectedImage, setSelectedImage] = useState<string>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [phoneToggle, setPhoneToggle] = useState<boolean>(false);
  const [whatAppToggle, setWhatAppToggle] = useState<boolean>(false);
  const [viberToggle, setViberToggle] = useState<boolean>(false);
  const [whatAppNumber, setWhatAppNumber] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [selectedLookingItem, setSelectedLookingItem] = useState<string>("");
  const [selectMake, setSelectMake] = useState<string>("None");
  const [selectedCondition, setSelectedCondition] = useState<string>(condition);
  const [selectedFuel, setSelectedFuel] = useState<string>("");
  const [selectedTransmission, setSelectedTransmission] = useState<string>("");
  const [selectedConditionPrice, setSelectedConditionPrice] =
    useState<string>("");
  const [makeModalVisible, setMakeModalVisible] = useState<boolean>(false);
  const [modelModalVisible, setModelModalVisible] = useState<boolean>(false);
  const [makeList, setMakeList] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>("None");
  const [modelList, setModelList] = useState<string[]>([]);
  const [errorMessg, setErrorMesg] = useState<boolean>(false);
  const [price, setPrice] = useState<string>("");

  const handlePriceFocus = () => {
    if (price.length === 0) {
      setErrorMesg(true);
    } else {
      setErrorMesg(false);
    }
  };
  const handlePriceBlur = () => {
    if (price === "") {
      setErrorMesg(true);
    } else {
      setErrorMesg(false);
    }
  };

  const handleSelectModel = (model: string) => {
    setSelectedModel((prv) => (prv === model ? "None" : model));
  };
  const handleSelectCondition = (condition: string) => {
    setSelectedCondition((prevCondition) =>
      prevCondition === condition ? "" : condition
    );
  };
  const handleSelectFuel = (condition: string) => {
    setSelectedFuel((prevCondition) =>
      prevCondition === condition ? "" : condition
    );
  };
  const handleSelectTransmission = (condition: string) => {
    setSelectedTransmission((prevCondition) =>
      prevCondition === condition ? "" : condition
    );
  };
  const handleSelectOther = (condition: string) => {
    setSelectMake((prevCondition) =>
      prevCondition === condition ? "None" : condition
    );
  };
  const handleSelectConditionPrice = (condition: string) => {
    setSelectedConditionPrice((prevCondition) =>
      prevCondition === condition ? "" : condition
    );
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setSelectedImage(result?.assets[0]?.uri);
    }
  };

  const openCamra = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setSelectedImage(result?.assets[0]?.uri);
      setModalVisible(false);
    }
  };

  const handleSelect = (value: string) => {
    setSelectedItem(value);
  };
  const handleLookingSelect = (value: string) => {
    setSelectedLookingItem(value);
  };

  const getMakes = async () => {
    let res = await getMakeBycategory(category, subCategory);
    console.log("Responce of Makes", res);

    if (res) {
      setMakeList(res);
    }
  };
  const getModels = async () => {
    let res = await getModel(subCategory, selectMake);
    console.log("Responce of Model", res);

    if (res) {
      setModelList(res);
    }
  };
  useEffect(() => {
    if (
      selectedConditionPrice === "Gratis" ||
      selectedConditionPrice === "Contact for price"
    ) {
      setPrice("");
      errorMessg && setErrorMesg(false);
    } else if (selectedConditionPrice === "" || price.length === 0) {
      setErrorMesg(true);
    }
  }, [selectedConditionPrice]);
  useEffect(() => {
    getMakes();
    getModels();
  }, [selectMake]);
  const fields = fieldConfigurations[category]?.[subCategory] || {};
  return (
    <ScreenWrapper
      statusBarColor={AppColors.primary}
      barStyle="dark-content"
      // scrollType="keyboard"
    >
      <Header back={true} title="Include Some Details" />

      <KeyboardAwareScrollView style={styles.parentView}>
        <View style={styles.imgContainer}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[
              AppColors.primary,
              AppColors.springGreen,
              AppColors.caribbeanGreen,
              AppColors.turquoise,
              AppColors.jetStream,
            ]}
            style={styles.gradientStyle}
          >
            <Pressable
              onPress={() => setModalVisible(true)}
              style={styles.iconCamra}
            >
              <FontAwesome5 name="camera" size={50} color="white" />
            </Pressable>
          </LinearGradient>
          <View style={styles.textContainer}>
            <Text style={styles.titleStyle}>{t("uploadImage.addImage")}</Text>
            <Text style={styles.desStyle}>{t("uploadImage.imageLimit")}</Text>
          </View>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.titleStyle}>Category</Text>
          <View style={styles.categoryContainer}>
            <Image source={{ uri: image }} style={styles.categoryImage} />
            <View style={styles.categoryTextContainer}>
              <Text style={styles.titleStyle}>
                {category && category.length > 19
                  ? category?.substring(0, 19).concat("...")
                  : category}
              </Text>
              <Text style={styles.titleStyle}>
                {subCategory && subCategory?.length > 18
                  ? subCategory?.substring(0, 18).concat("...")
                  : subCategory}
              </Text>
            </View>
          </View>
          {/* ------------------Whoami---------------- */}
          {category && category === "Relationship" && (
            <View style={styles.subCategoryitem}>
              <Text style={styles.titleStyle}>I am</Text>
              <View
                style={[
                  styles.checkItemContainer,
                  { marginVertical: height(1) },
                ]}
              >
                <TouchableOpacity
                  style={[
                    selectedItem === "Male"
                      ? styles.checkGenderItem
                      : styles.checkGenderItem2,
                  ]}
                  onPress={() => handleSelect("Male")}
                >
                  <Text style={styles.genderText}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    selectedItem === "Female"
                      ? styles.checkGenderItem
                      : styles.checkGenderItem2,
                  ]}
                  onPress={() => handleSelect("Female")}
                >
                  <Text style={styles.genderText}>Female</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    selectedItem === "Others"
                      ? styles.checkGenderItem
                      : styles.checkGenderItem2,
                  ]}
                  onPress={() => handleSelect("Others")}
                >
                  <Text style={styles.genderText}>Others</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* ------------------ Looking for---------------- */}
          {category && category === "Relationship" && (
            <View style={styles.subCategoryitem}>
              <Text style={styles.titleStyle}>Looking For</Text>
              <View
                style={[
                  styles.checkItemContainer,
                  { marginVertical: height(1) },
                ]}
              >
                <TouchableOpacity
                  style={[
                    selectedLookingItem === "Male"
                      ? styles.checkGenderItem
                      : styles.checkGenderItem2,
                  ]}
                  onPress={() => handleLookingSelect("Male")}
                >
                  <Text style={styles.genderText}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    selectedLookingItem === "Female"
                      ? styles.checkGenderItem
                      : styles.checkGenderItem2,
                  ]}
                  onPress={() => handleLookingSelect("Female")}
                >
                  <Text style={styles.genderText}>Female</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    selectedLookingItem === "Others"
                      ? styles.checkGenderItem
                      : styles.checkGenderItem2,
                  ]}
                  onPress={() => handleLookingSelect("Others")}
                >
                  <Text style={styles.genderText}>Others</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          {/* ------------------Make Modal---------------- */}
          {fields?.make && (
            <View style={styles.subCategoryitem}>
              <Text style={styles.titleStyle}>Make</Text>
              <Pressable
                style={styles.categoryPressableModalContainer}
                onPress={() =>
                  selectMake === "Others" ? null : setMakeModalVisible(true)
                }
              >
                <Text style={styles.lightDesStyle}>{selectMake}</Text>
                <FontAwesome5
                  name="chevron-right"
                  size={20}
                  color={AppColors.gray}
                />
              </Pressable>
              <SingleCheckBox
                onPress={() => handleSelectOther("Others")}
                isChecked={selectMake === "Others"}
                title="Others"
              />
            </View>
          )}
          {/* ---------------------Modal------------------------ */}
          {selectMake !== "Others" &&
            selectMake !== "None" &&
            (category === "Vehicles" || category === "Bikes") && (
              <View style={styles.subCategoryitem}>
                <Text style={styles.titleStyle}>Model</Text>
                <Pressable
                  style={styles.categoryPressableModalContainer}
                  onPress={() =>
                    selectedModel === "Others"
                      ? null
                      : setModelModalVisible(true)
                  }
                >
                  <Text style={styles.lightDesStyle}>{selectedModel}</Text>
                  <FontAwesome5
                    name="chevron-right"
                    size={20}
                    color={AppColors.gray}
                  />
                </Pressable>
                <SingleCheckBox
                  onPress={() => handleSelectModel("Others")}
                  isChecked={selectedModel === "Others"}
                  title="Others"
                />
              </View>
            )}

          {/* ------------------Area---------------- */}
          {fields?.area && (
            <InputText
              label="Area"
              placeholder="Enter Area"
              viewStyle={styles.inputView}
              style={styles.input}
              // editable={false}
            />
          )}

          {/* ------------------Breed---------------- */}
          {category === "Animals" && (
            <InputText
              label="Breed"
              placeholder="Enter Breed"
              viewStyle={styles.inputView}
              style={styles.input}
              editable={false}
            />
          )}

          {/* ------------------Type---------------- */}
          {fields?.type && (
            <View style={styles.subCategoryitem}>
              <Text style={styles.titleStyle}>Type</Text>
              <Pressable style={styles.categoryPressableModalContainer}>
                <Text style={styles.lightDesStyle}>None</Text>
                <FontAwesome5
                  name="chevron-right"
                  size={20}
                  color={AppColors.gray}
                />
              </Pressable>
              <SingleCheckBox
                onPress={() => handleSelectCondition("Others")}
                isChecked={selectedCondition === "Others"}
                title="Others"
              />
            </View>
          )}
          {/* ------------------Condition ---------------- */}
          {fields?.condition && (
            <View style={styles.subCategoryitem}>
              <Text style={styles.titleStyle}>Condition</Text>
              <View style={styles.checkItemContainer}>
                <SingleCheckBox
                  onPress={() => handleSelectCondition("New")}
                  isChecked={selectedCondition === "New"}
                  title="New"
                  textStyle={styles.checkTextStyle}
                />
                <SingleCheckBox
                  onPress={() => handleSelectCondition("Used")}
                  isChecked={selectedCondition === "Used"}
                  title="Used"
                  textStyle={styles.checkTextStyle}
                />
                <SingleCheckBox
                  onPress={() => handleSelectCondition("Others")}
                  isChecked={selectedCondition === "Others"}
                  title="Others"
                  textStyle={styles.checkTextStyle}
                />
              </View>
            </View>
          )}
          {/* ------------------ Gender ---------------- */}
          {category === "Animals" && (
            <View style={styles.subCategoryitem}>
              <Text style={styles.titleStyle}>Gender</Text>
              <View style={styles.checkItemContainer}>
                <SingleCheckBox
                  onPress={() => handleSelectCondition("")}
                  isChecked={selectedCondition === "Others"}
                  title="Male"
                  textStyle={styles.checkTextStyle}
                />
                <SingleCheckBox
                  onPress={() => handleSelectCondition("")}
                  isChecked={selectedCondition === "Others"}
                  title="Female"
                  textStyle={styles.checkTextStyle}
                />
              </View>
            </View>
          )}
          {/* ------------------Age---------------- */}
          {category === "Animals" && (
            <InputText
              label="Age"
              placeholder="Enter Age"
              viewStyle={styles.inputView}
              style={styles.input}
              editable={false}
            />
          )}
          {/* ------------------ Furnished ---------------- */}
          {fields?.furnished && (
            <View style={styles.subCategoryitem}>
              <Text style={styles.titleStyle}>Furnished</Text>
              <View style={styles.checkItemContainer}>
                <SingleCheckBox
                  onPress={() => handleSelectCondition("")}
                  isChecked={selectedCondition === "Others"}
                  title="Furnished"
                  textStyle={styles.checkTextStyle}
                />
                <SingleCheckBox
                  onPress={() => handleSelectCondition("")}
                  isChecked={selectedCondition === "Others"}
                  title="Unfurnished"
                  textStyle={styles.checkTextStyle}
                />
              </View>
            </View>
          )}
          {/* ------------------BedRooms---------------- */}
          {fields?.bedrooms && (
            <InputText
              label="Bedrooms"
              placeholder="Enter Bedrooms"
              viewStyle={styles.inputView}
              style={styles.input}
              // editable={false}
            />
          )}
          {/* ------------------BathRooms---------------- */}
          {fields?.bathrooms && (
            <InputText
              label="Bathrooms"
              placeholder="Enter Bathrooms"
              viewStyle={styles.inputView}
              style={styles.input}
              // editable={false}
            />
          )}

          {/* ------------------companyName---------------- */}
          {category === "Jobs" && (
            <InputText
              label="Company Name"
              placeholder="Enter Company Name"
              viewStyle={styles.inputView}
              style={styles.input}
              editable={false}
            />
          )}
          {/* ------------------Salary To---------------- */}
          {category === "Jobs" && (
            <InputText
              label="Salary To"
              placeholder="Enter Salary To"
              viewStyle={styles.inputView}
              style={styles.input}
              editable={false}
            />
          )}
          {/* ------------------Salary Period---------------- */}
          {category === "Jobs" && (
            <InputText
              label="Salary Period"
              placeholder="Enter Salary Period"
              viewStyle={styles.inputView}
              style={styles.input}
              editable={false}
            />
          )}
          {/* ------------------positionType---------------- */}
          {category === "Jobs" && (
            <InputText
              label="Position Type"
              placeholder="Enter Position Type"
              viewStyle={styles.inputView}
              style={styles.input}
              // editable={false}
            />
          )}
          {/* ------------------Year---------------- */}
          {fields?.year && (
            <InputText
              label="Year"
              placeholder="Enter Year"
              viewStyle={styles.inputView}
              style={styles.input}
              // editable={false}
            />
          )}
          {/* ------------------workingHours---------------- */}
          {fields?.workingHours && (
            <InputText
              label="Working Hours"
              placeholder="Enter Working Hours"
              viewStyle={styles.inputView}
              style={styles.input}
              // editable={false}
            />
          )}
          {/* ------------------Mileage---------------- */}
          {fields?.mileage && (
            <InputText
              label="Mileage"
              placeholder="Enter Mileage"
              viewStyle={styles.inputView}
              style={styles.input}
              // editable={false}
            />
          )}
          {/* ----------------- Fuel Type ---------------- */}
          {fields?.fuelType && (
            <View style={styles.subCategoryitem}>
              <Text style={[styles.titleStyle, { marginVertical: height(1) }]}>
                Fuel Type
              </Text>
              <View style={styles.checkItemContainer}>
                <SingleCheckBox
                  onPress={() => handleSelectFuel("Petrol")}
                  isChecked={selectedFuel === "Petrol"}
                  title="Petrol"
                  textStyle={styles.checkTextStyle}
                />
                <SingleCheckBox
                  onPress={() => handleSelectFuel("Diesel")}
                  isChecked={selectedFuel === "Diesel"}
                  title="Diesel"
                  textStyle={styles.checkTextStyle}
                />
                <SingleCheckBox
                  onPress={() => handleSelectFuel("Electric")}
                  isChecked={selectedFuel === "Electric"}
                  title="Electric"
                  textStyle={styles.checkTextStyle}
                />
                <SingleCheckBox
                  onPress={() => handleSelectFuel("Others")}
                  isChecked={selectedFuel === "Others"}
                  title="Others"
                  textStyle={styles.checkTextStyle}
                />
              </View>
            </View>
          )}
          {/* ----------------- transmission ---------------- */}
          {fields?.transmission && (
            <View style={styles.subCategoryitem}>
              <Text style={[styles.titleStyle]}>Transmission</Text>
              <View style={styles.checkItemContainer}>
                <SingleCheckBox
                  onPress={() => handleSelectTransmission("Manual")}
                  isChecked={selectedTransmission === "Manual"}
                  title="Manual"
                  textStyle={styles.checkTextStyle}
                />
                <SingleCheckBox
                  onPress={() => handleSelectTransmission("Automatic")}
                  isChecked={selectedTransmission === "Automatic"}
                  title="Automatic"
                  textStyle={styles.checkTextStyle}
                />
                <SingleCheckBox
                  onPress={() => handleSelectTransmission("Others")}
                  isChecked={selectedTransmission === "Others"}
                  title="Others"
                  textStyle={styles.checkTextStyle}
                />
              </View>
            </View>
          )}
          {/* ------------------Installment Plan---------------- */}
          {fields?.installmentPlan && (
            <InputText
              label="Installments Plan"
              placeholder="Enter Installment Plan"
              viewStyle={styles.inputView}
              style={styles.input}
              editable={false}
            />
          )}
          {/* ------------------ Down Payment---------------- */}
          {fields?.downPayment && (
            <InputText
              label="Down Payment"
              placeholder="Enter Down Payment"
              viewStyle={styles.inputView}
              style={styles.input}
              editable={false}
            />
          )}
          {/* ------------------ Monthly Installments---------------- */}
          {fields?.monthlyInstallment && (
            <InputText
              label="Monthly Installments"
              placeholder="Enter Monthly Installment"
              viewStyle={styles.inputView}
              style={styles.input}
              editable={false}
            />
          )}
          {/* ------------------Location---------------- */}
          {/* {fields?.location && ( */}
          <View style={styles.subCategoryitem}>
            <Text style={styles.titleStyle}>Location</Text>
            <Pressable
              style={styles.categoryPressableModalContainer}
              onPress={() => navigation.navigate(ScreenNames.LOCATION)}
            >
              <Text style={styles.lightDesStyle}>Select your Location</Text>
              <FontAwesome5
                name="chevron-right"
                size={20}
                color={AppColors.gray}
              />
            </Pressable>

            <Text style={styles.errorMessg}>Required*</Text>
          </View>
          {/* )} */}
          {/* ------------------Price ---------------- */}
          {category === "Jobs" ? null : (
            <View style={styles.subCategoryitem}>
              <InputText
                label="Price"
                placeholder="Enter Price"
                viewStyle={styles.inputView}
                style={styles.input}
                onChangeText={(text) => setPrice(text)}
                value={price}
                keyboardType="number-pad"
                onFocus={handlePriceFocus}
                onBlur={handlePriceBlur}
                editable={selectedConditionPrice !== "" ? false : true}
              />
              <View style={styles.checkItemContainer}>
                <SingleCheckBox
                  onPress={() => handleSelectConditionPrice("Gratis")}
                  isChecked={selectedConditionPrice === "Gratis"}
                  title="Gratis"
                  textStyle={styles.checkTextStyle}
                />
                <SingleCheckBox
                  onPress={() =>
                    handleSelectConditionPrice("Contact for price")
                  }
                  isChecked={selectedConditionPrice === "Contact for price"}
                  title="Contact for price"
                  textStyle={styles.checkTextStyle}
                />
              </View>
              {errorMessg && <Text style={styles.errorMessg}>Required*</Text>}
            </View>
          )}
          {/* ------------------Ad Title ---------------- */}
          {/* {category === "Mobiles" && subCategory === "Tablets" && ( */}
          <View style={[styles.subCategoryitem]}>
            <InputText
              label="Ad Title"
              placeholder="Enter Title"
              viewStyle={styles.inputViewAdTitle}
              style={styles.inputAdTitle}
            />
          </View>
          {/* )} */}
          {/* ------------------DesCription ---------------- */}
          {/* {category === "Mobiles" && subCategory === "Tablets" && ( */}
          <View style={styles.subCategoryitem}>
            <InputText
              label="Description"
              placeholder="Enter Description"
              viewStyle={styles.inputViewDescription}
              style={styles.inputDescription}
            />
          </View>
          {/* )} */}
          {/* ----------------Contact Field-------------- */}
          {/* ----------------Phone Number -------------- */}
          <View style={styles.subCategoryitem}>
            <ToggleSwitch
              isOn={phoneToggle}
              onColor="green"
              offColor="red"
              label="Show my Phone number in ad"
              labelStyle={styles.toggleLabel}
              size="small"
              onToggle={() => setPhoneToggle(!phoneToggle)}
            />
            {phoneToggle && (
              <InputText
                label="Phone Number"
                placeholder="+92335455454"
                viewStyle={styles.inputView}
                style={styles.input}
                editable={false}
              />
            )}
          </View>
          {/* ----------------WhatApp Number -------------- */}
          <View style={styles.subCategoryitem}>
            <ToggleSwitch
              isOn={whatAppToggle}
              onColor="green"
              offColor="red"
              label="Show my WhatApp number in ad"
              labelStyle={styles.toggleLabel}
              size="small"
              onToggle={() => setWhatAppToggle(!whatAppToggle)}
            />
            {whatAppToggle && (
              <ChangeNumber
                text="WhatsApp"
                value={""}
                changeValue={whatAppNumber}
                setChangeValue={setWhatAppNumber}
              />
            )}
          </View>
          {/* ----------------Viber Number -------------- */}
          <View style={styles.subCategoryitem}>
            <ToggleSwitch
              isOn={viberToggle}
              onColor="green"
              offColor="red"
              label="Show my Viber number in ad"
              labelStyle={styles.toggleLabel}
              size="small"
              onToggle={() => setViberToggle(!viberToggle)}
            />
            {viberToggle && (
              <ChangeNumber
                text="Viber"
                value={""}
                changeValue={whatAppNumber}
                setChangeValue={setWhatAppNumber}
              />
            )}
          </View>
          <Button
            title="Submit"
            onPress={() => {
              console.log("This is slected val", selectedCondition);
            }}
            style={styles.submitBtn}
          />
        </View>

        <DropDownMenu
          isVisible={modalVisible}
          onClose={() => setModalVisible(false)}
          firstBtnText={t("editProfile.takePhoto")}
          secondBtnText={t("editProfile.library")}
          onPressFirstBtn={() => openCamra()}
          onPressSecondBtn={() => pickImage()}
        />
        <CustomModal
          isVisible={makeModalVisible}
          onClose={() => setMakeModalVisible(false)}
          selectedItem={setSelectMake}
          dataList={makeList}
          label="Make"
        />
        {/* {/* {selectedOther !== "None" || selectedModel !== "Other" ? null : ( */}
        <CustomModal
          isVisible={modelModalVisible}
          onClose={() => setModelModalVisible(false)}
          selectedItem={setSelectedModel}
          dataList={modelList}
          label="Model"
        />
        {/* )}  */}
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
}
