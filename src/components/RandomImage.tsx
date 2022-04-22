import { Image, ImageSourcePropType, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SIZES } from "../../constants"
import useRandomImage from '../lib/hooks/useRandomImage'

interface Props {
    index: number,
}

const RandomImage: React.FC<Props> = ({ index }) => {

    const { imgUrl, isLoading } = useRandomImage()

    return <Image key={index} style={{ width: 48, height: 48, marginLeft: -SIZES.medium, borderRadius: 100 }} source={{
        uri: imgUrl
    }} />
}

export default RandomImage