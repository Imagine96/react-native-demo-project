import React from "react";
import { SafeAreaView, View, FlatList, ScrollView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { NFTItemType, RootStackParamList } from "../lib/types";
import StatusBar from "../components/Details/StatusBar";
import { SquareButton } from "../components/Button";
import Bid from "../components/Details/Bid";
import Description from "../components/Details/Description";
import { SIZES } from "../../constants";

const Details: React.FC<StackScreenProps<RootStackParamList>> = ({ navigation, route }) => {

    const item = route.params as NFTItemType

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "white",
        }} >
            <View  >
                <StatusBar />
                <View>
                    <FlatList
                        ListHeaderComponent={<Description data={item} navigation={navigation} />}
                        showsVerticalScrollIndicator={false}
                        data={item.bids}
                        renderItem={(item) => <Bid bid={item.item} key={item.index} />}
                        ListFooterComponent={<View style={{ paddingVertical: SIZES.large, width: "50%", alignSelf: "center" }} ><SquareButton handler={() => { }} /></View>}
                    />
                </View>
                <View style={{
                    maxWidth: "40%",
                    alignSelf: "center"
                }} >
                    <SquareButton handler={() => { }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Details