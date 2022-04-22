import React, { useState, useCallback } from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import Header from "../components/Home/Header";
import NTFCard from "../components/Home/NTFCard";
import FocusedState from "../components/Home/FocusedState";
import { COLORS, NFTData } from "../../constants";
import { NFTItemType } from "../lib/types";

const Home: React.FC = () => {

    const [nftData, setNftData] = useState<NFTItemType[]>(NFTData)

    const handleSearch = useCallback((target: string) => {
        if (!target.length) return setNftData(NFTData)
        const filteredData = NFTData.filter((item) => item.name.toLowerCase().includes(target.toLowerCase()) || item.description.toLowerCase().includes(target.toLowerCase()) || item.creator.toLowerCase().includes(target.toLowerCase()))
        setNftData(filteredData.length ? filteredData : NFTData)
    }, [])

    return (
        <SafeAreaView style={{
            flex: 1
        }} >
            <FocusedState />
            <View style={{
                flex: 1,
                zIndex: 0
            }} >
                <FlatList
                    data={nftData}
                    keyExtractor={(item) => item.id}
                    renderItem={(item) => <NTFCard item={item.item} />}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<Header handleSearch={handleSearch} />}
                />
                <View style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: -1
                }} >
                    <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                    <View style={{ flex: 1, backgroundColor: COLORS.white }} >

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home
