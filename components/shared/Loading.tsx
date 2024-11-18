import { Spinner } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'

const Loading = () => {
    return (
        <View style={{ alignSelf: 'center', flex: 1, justifyContent: 'center' }}>
            <Spinner />
        </View>
    )
}

export default Loading