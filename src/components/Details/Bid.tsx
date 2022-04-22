import { View, Text, Image } from 'react-native'
import React from 'react'
import { NFTItemBidType } from '../../lib/types'
import { SIZES, assets, COLORS } from "../../../constants"

interface Props {
    bid: NFTItemBidType
}

const Bid: React.FC<Props> = ({ bid }) => {
    return (
        <View style={{
            width: "100%",
            paddingHorizontal: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            marginVertical: SIZES.font
        }} >
            <Image resizeMode='contain' source={bid.image} style={{
                width: 60,
                height: 60
            }} />
            <View style={{
                justifyContent: "center",
                alignContent: "center"
            }} >
                <Text style={{
                    textAlign: "center"
                }} >{bid.name}</Text>
                <Text style={{
                    textAlign: "center",
                    fontSize: SIZES.base,
                    color: COLORS.gray
                }}> {bid.date} </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                <Image source={assets.eth} resizeMode="contain" style={{
                    width: 20,
                    height: 20,
                }} />
                <Text>
                    {bid.price}
                </Text>
            </View>
        </View>
    )
}

export default Bid