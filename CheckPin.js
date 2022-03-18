import React, { Component } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'


export function _onFulfill(code) {
    // TODO: call API to check code here
    // If code does not match, clear input with: this.refs.codeInputRef1.clear()
    if (code != '0000') {
        Alert.alert(
        'Input attempt:',
        'Successful!',
        [{text: 'OK'}],
        { cancelable: false }
        );
    } else {
        Alert.alert(
        'Input attempt:',
        'Incorrect PIN!',
        [{text: 'OK'}],
        { cancelable: false }
        );
    }
}
