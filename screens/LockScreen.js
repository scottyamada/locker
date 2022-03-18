import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    StatusBar,
  } from "react-native";
import React, { Component, useRef } from "react";
import CodeInput from 'react-native-confirmation-code-input';
import {_onFulfill} from "../CheckPin";

const LockScreen = (props) => {
    const codeInputRef = useRef();

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
                <ScrollView>
                    <CodeInput
                        ref={codeInputRef}
                        secureTextEntry
                        keyboardType="numeric"
                        codeLength={4}
                        compareWithCode='0000'
                        className={'border-circle'}
                        activeColor='rgba(49, 180, 4, 1)'
                        inactiveColor='rgba(172, 75, 191, 1)'
                        space={20}
                        size={30}
                        inputPosition='center'
                        containerStyle={{ marginTop: 100 }}
                        codeInputStyle={{ borderWidth: 1.5 }}
                        onFulfill=/*{(code) => _onFulfill(code)}*/{() => {
                            props.navigation.navigate("home");
                          }}
                    />
                </ScrollView>
        </View>
    );
    };

    export default LockScreen;

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#131313",
        // alignItems: "center",
    },
});
