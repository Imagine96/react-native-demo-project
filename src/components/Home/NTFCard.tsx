import { View, Text, Image } from 'react-native'
import React from 'react'
import { NFTItemType } from '../../lib/types'
import { useNavigation } from "@react-navigation/native"
import { CircleButton, SquareButton } from '../Button'
import useCountDown from '../../lib/hooks/useCountDown'

import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../../../constants"
import { StackNavigationProp } from '@react-navigation/stack'

interface Props {
  item: NFTItemType
}

const NTFCard: React.FC<Props> = ({ item }) => {

  const navigation = useNavigation<StackNavigationProp<{ Details: NFTItemType }>>()
  const [days, hours, minutes, seconds] = useCountDown(Date.parse('04 Jun 2022 00:12:00 GMT'))

  const handler = () => {
    navigation.navigate("Details", item)
  }

  return (
    <View style={{
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      position: "relative",
      backgroundColor: "white",
      paddingBottom: 8,
      ...SHADOWS.dark,
    }} >
      <View style={{
        width: "100%",
        height: 250,
      }} >
        <Image source={item.image} resizeMode="cover" style={{
          height: "100%",
          width: "100%",
          borderTopLeftRadius: SIZES.font,
          borderTopRightRadius: SIZES.font,
        }} />
        <CircleButton handler={() => { }} imgUrl={assets.heart} />
      </View>
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
          {item.bids.map((item, index) => {
            {
              return <Image key={index} style={{ width: 48, height: 48, marginLeft: -SIZES.medium, borderRadius: 100 }} source={item.image} />
            }
          })}
        </View>
        <View style={{
          paddingVertical: SIZES.base,
          backgroundColor: COLORS.white,
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "50%",
          ...SHADOWS.light,
          elevation: 1,
          borderRadius: SIZES.font,
          padding: 2
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
      <View style={{
        padding: SIZES.font,
        marginTop: -SIZES.large,
        width: "100%"
      }} >
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.large
        }} >
          {item.name}
        </Text>
        <Text style={{
          fontFamily: FONTS.light,
          fontSize: SIZES.small
        }} >
          {item.creator}
        </Text>
      </View>
      <View style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }} >
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
            {item.price}
          </Text>
        </View>
        <SquareButton handler={() => handler()} />
      </View>
    </View>
  )
}

export default NTFCard