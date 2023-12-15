
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import React from "react";
import { View, StatusBar, Image, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated, { FadeIn, FadeOut, FadeInDown } from "react-native-reanimated"


function Home({ navigation }) {

    return (

        <View className="flex-1 justify-end">
            <StatusBar barStyle="dark-content" hidden={true} />
            <Image className="h-full w-full absolute" source={require("../assets/images/welcome.png")} />

            <LinearGradient colors={["transparent", "#18181b"]}
                style={{ width: wp(100), height: hp(70) }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 0.8 }}
                className="flex justify-end pb-12 space-y-8"
            >
                <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center">
                    <Text className="text-white font-bold tracking-wide" style={{ fontSize: hp(5) }}>
                        Best <Text className="text-rose-500">Workouts</Text>
                    </Text>
                    <Text className="text-white font-bold tracking-wide" style={{ fontSize: hp(5) }}>
                        For You
                    </Text>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200).springify()} >
                    <TouchableOpacity
                        style={{ height: hp(7), width: wp(80) }}
                        onPress={() => navigation.navigate("HomeScreen")}
                        className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-neutral-200 border-[2px]">
                        <Text className='text-white font-bold tracking-wide' style={{ fontSize: hp(3), }}>
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </Animated.View>

            </LinearGradient>
        </View>




    );
}


export default Home;


