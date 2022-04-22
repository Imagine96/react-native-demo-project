import React, { useState, useCallback } from 'react'
import { View, Text, Image, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import { SIZES, FONTS, assets } from '../../../constants'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

interface Props {
    handleSearch: (target: string) => void
}

const Header: React.FC<Props> = ({ handleSearch }) => {

    const [searchWord, setSearchWord] = useState<string>("")

    const updateSearchWord = useCallback((e: string) => {
        setSearchWord(e.trim())
    }, [])

    return (
        <View style={{ padding: SIZES.font }} >
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }} >
                <Image source={assets.logo} resizeMode="contain" style={{
                    width: 90,
                    height: 30
                }} />
                <View style={{
                    height: 45,
                    width: 45,
                    position: "relative"
                }} >
                    <Image source={assets.person01} resizeMode="contain" style={{
                        width: "100%",
                        height: "100%"
                    }} />
                    <Image source={assets.badge} resizeMode="contain" style={{
                        position: "absolute",
                        width: 20,
                        height: 20,
                        bottom: -5,
                        right: -5
                    }} />
                </View>
            </View>
            <View style={{
                marginVertical: SIZES.font
            }} >
                <Text style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.small,
                    color: "white"
                }} >
                    Hello Vero 👋
                </Text>
                <Text style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.medium,
                    color: "white"
                }} >
                    Let's find a masterpiece!
                </Text>
            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center"
            }} >
                <TouchableOpacity onPress={() => handleSearch(searchWord)} >
                    <Image source={assets.search} resizeMode="contain" style={{
                        width: 24,
                        height: 24,
                        marginRight: 12
                    }} />
                </TouchableOpacity>
                <TextInput onChangeText={updateSearchWord} style={{
                    borderBottomColor: "white",
                    borderBottomWidth: 1,
                    width: "60%",
                    paddingBottom: 2,
                    fontSize: SIZES.medium,
                    color: "white",
                }} placeholder="search" value={searchWord} />
            </View>
        </View>
    )
}

export default Header