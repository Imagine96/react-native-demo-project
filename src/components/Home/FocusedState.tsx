import { StatusBar } from 'react-native'
import React from 'react'
import { useIsFocused } from "@react-navigation/core"

const FocusedState: React.FC = () => {

    const isFocused = useIsFocused()

    return isFocused ? <StatusBar animated={true} barStyle="dark-content" /> : null
}

export default FocusedState