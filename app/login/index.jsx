import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const LoginScreen = () => {
  return (
    <View className="bg-white h-full">
      <Image
        source={require("../../assets/images/login.jpg")}
        className="w-[100%] h-[530px] "
      />
      <View className="items-center mt-5">
        <Text className="text-[2.5rem] font-outfit-medium text-center">
          Looking for a New Buddy?
        </Text>

        <Text className="mt-5 font-outfit text-[1.5rem] text-center mx-16 ">
          Let's adopt a pet and make lifelong companions!
        </Text>
      </View>
      <Pressable className="bg-[#ff6b7f] w-[80%] h-[50px] rounded-full mt-10 mx-auto items-center justify-center">
        <Text className="text-white text-[1.5rem] font-outfit-bold">
          Get Started
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
