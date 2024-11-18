import { Input, InputProps } from '@ui-kitten/components';
import React from 'react'
import { TextInput } from 'react-native'

interface IProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

const InputField = (props: InputProps) => {
  return (
    <Input
        {...props}
    />
  )
}

export default InputField