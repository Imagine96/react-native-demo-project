import { View, Text, Image, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { NFTItemType, RootStackParamList } from '../../lib/types'
import React, { useCallback, useEffect, useState } from 'react'
import { CircleButton, Button } from "../Button"
import { assets, SIZES, COLORS, SHADOWS, FONTS } from "../../../constants"
import useCountDown from "../../lib/hooks/useCountDown"

interface Props {
    data: NFTItemType;
    navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}

const Description: React.FC<Props> = ({ data, navigation }) => {

    const [description, setDescription] = useState<string>(data.description.slice(0, 120) + "...")
    const [showMore, setShowMore] = useState<boolean>(false)

    const toggleShowContent = useCallback(() => {
        setShowMore(prev => !prev)
    }, [])

    useEffect(() => {
        console.log(showMore)
        if (showMore) {
            setDescription(data.description)
        } else {
            setDescription(data.description.slice(0, 120) + "...")
        }
    }, [showMore])

    const navigateHome = () => {
        navigation.navigate("Home")
    }

    const [days, hours, minutes, seconds] = useCountDown(Date.parse('04 Jun 2022 00:12:00 GMT'))

    return (
        <View style={{
            width: "100%",
        }} >
            <View style={{
                width: "100%",
                height: 450,
                marginBottom: 50
            }} >
                <Image source={data.image} resizeMode="cover" style={{
                    height: "100%",
                    width: "100%",
                }} />
                <CircleButton handler={() => { }} imgUrl={assets.heart} />
                <CircleButton handler={navigateHome} left imgUrl={assets.left} />
                <View style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    paddingHorizontal: SIZES.font,
                    marginTop: -30,
                }} >
                    <View style={{
                        flexDirection: "row",
                        paddingLeft: SIZES.font
                    }}>
                        {data.bids.map((item, index) => {
                            {
                                return <Image key={index} style={{ width: 48, height: 48, marginLeft: -SIZES.medium, borderRadius: 100 }} source={item.image} />
                            }
                        })}
                    </View>
                    <View style={{
                        backgroundColor: COLORS.white,
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: "50%",
                        ...SHADOWS.light,
                        elevation: 1,
                        borderRadius: SIZES.font,
                        padding: SIZES.base
                    }} >
                        <Text style={{
                            fontFamily: FONTS.regular,
                            fontSize: SIZES.small,
                            color: COLORS.primary
                        }} >Ending in</Text>
                        <Text style={{
                            textAlign: "center",
                            fontFamily: FONTS.semiBold,
                            fontSize: SIZES.medium,
                            color: COLORS.primary
                        }} > {days} days {hours}h {'\n'}  {minutes}m {seconds}s</Text>
                    </View>
                </View>
            </View>
            <View style={{
                width: "100%",
                padding: SIZES.font,
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "center"
            }} >
                <View style={{
                    width: "50%"
                }} >
                    <Text style={{
                        fontFamily: FONTS.semiBold,
                        fontSize: SIZES.large
                    }} >
                        {data.name}
                    </Text>
                    <Text style={{
                        fontFamily: FONTS.light,
                        fontSize: SIZES.small
                    }} >
                        {data.creator}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Image source={assets.eth} resizeMode="contain" style={{
                        width: 20,
                        height: 20,
                    }} />
                    <Text>
                        {data.price}
                    </Text>
                </View>

            </View>
            <View style={{
                marginVertical: 12,
                padding: SIZES.font,
            }} >
                <Text style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.large,
                    marginBottom: SIZES.font
                }} > Description </Text>
                <Text> {description} </Text>
                <Text style={{
                    fontFamily: FONTS.semiBold,
                    padding: 0,
                    marginVertical: SIZES.base,
                }} onPress={toggleShowContent} > {showMore ? "Show less" : "...Show more"}</Text>
            </View>
        </View>
    )
}

export default Description