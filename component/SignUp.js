import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, TextInput, TouchableHighlight } from "react-native";

const SignUp = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [numberError, setNumberError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [cpasswordError, setCpasswordError] = useState(false);

    const checkValidation = () => {
        if (!name) {
            setNameError(true)
        } else {
            setNameError(false)
        }

        if (!email) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }

        if (!number) {
            setNumberError(true)
        } else {
            setNumberError(false)
        }

        if (!password) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }

        if (!cpassword) {
            setCpasswordError(true)
        } else {
            setCpasswordError(false)
        }
    }
    return (
        <View style={styles.main} >
            <ScrollView >
                <View style={{ height: 20 }} />
                <Text style={{ fontSize: 20, color: "gray", textAlign: 'center', margin: 10 }}>Register Here</Text>
                <View
                    style={styles.txtStyle}>
                    <TextInput
                        style={styles.txtInputStyle}
                        placeholder="User Name"
                        onChangeText={(txt) => setName(txt)}
                    />
                </View>
                {
                    nameError ?
                        <Text style={styles.txtError}>Name should not be empty.</Text>
                        : null
                }
                <View style={{ height: 10 }} />
                <View
                    style={styles.txtStyle}>
                    <TextInput
                        keyboardType="email-address"
                        style={styles.txtInputStyle}
                        placeholder="Email"
                        onChangeText={(txt) => setEmail(txt)} />
                </View>
                {
                    emailError ?
                        <Text style={styles.txtError}>Email should not be empty.</Text>
                        : null
                }
                <View style={{ height: 10 }} />
                <View
                    style={styles.txtStyle}>
                    <TextInput
                        keyboardType="decimal-pad"
                        style={styles.txtInputStyle}
                        placeholder="Mobile Number"
                        onChangeText={(txt) => setNumber(txt)} />
                </View>
                {
                    numberError ?
                        <Text style={styles.txtError}>Mobile number should not be empty.</Text>
                        : null
                }
                <View style={{ height: 10 }} />
                <View
                    style={styles.txtStyle}>
                    <TextInput
                        style={styles.txtInputStyle}
                        placeholder="Password"
                        onChangeText={(txt) => setPassword(txt)} />
                </View>
                {
                    passwordError ?
                        <Text style={styles.txtError}>Password should not be empty.</Text>
                        : null
                }
                <View style={{ height: 10 }} />
                <View
                    style={styles.txtStyle}>
                    <TextInput
                        style={styles.txtInputStyle}
                        placeholder="Confirm Password"
                        onChangeText={(txt) => setCpassword(txt)} />
                </View>
                {
                    cpasswordError ?
                        <Text style={styles.txtError}>Confirm password should not be empty.</Text>
                        : null
                }
                <View style={{ height: 10 }} />
                <TouchableHighlight onPress={checkValidation}>
                    <View style={styles.btnshow}>
                        <Text style={styles.btnText}>Register</Text>
                    </View>
                </TouchableHighlight>

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        //alignItems:'center',
        // justifyContent:'center'
        // backgroundColor: 'skyblue',
    },
    customWrapper: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    customView: {
        borderRadius: 15,
        backgroundColor: 'gray',
        height: 300,
        width: 300,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        elevation: 5,

    },
    btnText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
    },
    btn: {
        backgroundColor: 'skyblue',
        borderRadius: 15,
        padding: 10,
        margin: 10,
        elevation: 5,
        shadowOpacity: 0.3,
        shadowColor: 'black',
    },
    btnshow: {
        backgroundColor: 'grey',
        borderRadius: 15,
        padding: 10,
        marginHorizontal: 30,
        marginVertical: 20,
        elevation: 5,
        shadowOpacity: 0.3,
        shadowColor: 'black',
    },
    txtStyle: {
        marginHorizontal: 30, marginVertical: 10, borderBlockColor: 'grey',
        borderWidth: 2.0, height: 50, borderRadius: 15,
    },
    txtInputStyle: { marginLeft: 10, height: 50, fontSize: 18 },
    txtError: {
        marginLeft: 30, color: 'red', fontSize: 16
    }
})
export default SignUp