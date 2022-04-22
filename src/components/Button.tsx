import { View, Text, TouchableOpacity, Image, TouchableOpacityProps, ImageSourcePropType } from 'react-native'
import React from 'react'
import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../../constants'

interface CircleButtonProps extends TouchableOpacityProps {
    imgUrl: ImageSourcePropType,
    handler: () => void,
    left?: boolean
}

export const CircleButton: React.FC<CircleButtonProps> = ({ imgUrl, handler, left, ...props }) => {

    let position = left ? {
        left: 10
    } : { right: 10 }

    return (
        <TouchableOpacity style={{
            width: 36,
            height: 36,
            position: "absolute",
            ...position,
            top: 10,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.extraLarge,
            justifyContent: "center",
            alignItems: "center",
            ...SHADOWS.light,
        }}
            {...props}
            onPress={handler}
        >
            <Image source={imgUrl} resizeMode="center" />
        </TouchableOpacity>
    )
}

interface SquareButtonProps extends TouchableOpacityProps {
    handler: () => void
}

export const SquareButton: React.FC<SquareButtonProps> = ({ handler, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.small,
                ...SHADOWS.medium,
                paddingHorizontal: 15,
                paddingVertical: 10,
                justifyContent: "center",
                alignItems: "center"
            }}
            {...props}
            onPress={handler}
        >
            <Text style={{
                color: COLORS.white,
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.medium
            }} >
                Place a bid
            </Text>
        </TouchableOpacity>
    )
}

interface ButtonProps {
    handler: () => void,
    text: string
}

export const Button: React.FC<ButtonProps> = ({ handler, text }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.small,
                ...SHADOWS.medium,
                paddingHorizontal: 15,
                paddingVertical: 10,
                justifyContent: "center",
                alignItems: "center",
                marginTop: SIZES.font,
                width: "50%"
            }}
            onPress={handler}
        >
            <Text style={{
                color: COLORS.white,
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.medium
            }} >
                {text}
            </Text>
        </TouchableOpacity>
    )
}


