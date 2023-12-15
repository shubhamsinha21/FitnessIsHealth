import { SafeAreaView, StatusBar, View, Text, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
// import Ionicons from "react-native-vector-icons/Ionicons";

export default function HomeScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>
            <StatusBar barStyle="dark-content" />

            {/* punchline */}
            <View className="flex-row justify-between items-center mx-5">
                <View className="space-y-2">
                    <Text className="text-3xl font-bold text-neutral-700 tracking-wider">
                        READY TO
                    </Text>
                    <Text className="text-3xl font-bold text-rose-500 tracking-wider">
                        WORKOUT
                    </Text>

                </View>

                <View className="flex justify-center items-center space-y-2">
                    <Image source={require("../assets/images/avatar.png")}
                        style={{ height: hp(6), width: hp(6) }}
                        className="rounded-full"
                    />

                    <View className="bg-neutral-200 flex justify-center items-center border-[3px] border-neutral-300"
                        style={{ height: hp(5.5), width: wp(5.5) }}
                    >
                        {/* <Ionicons name="notifications" size={hp(3)} color="gray" /> */}
                    </View>


                </View>
            </View>
        </SafeAreaView>
    )
}
