import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableHighlight, Text, TextInput, Button, Image, Animated, Easing } from "react-native";

export default LoginView = (props) => {
    const spinValue = new Animated.Value(0);
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const spinView = () => {
        //Animated.loop(
        spinValue.setValue(0);
        Animated.timing(
            spinValue,
            {
                toValue: 0.5,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: true
            }).start(() => spinView())
        // ).start();
    }
    useEffect(() => {
        spinView();
    }, [])

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    //function validateLogin(){
    const validateLogin = () => {
        if (!name && !password) {
            setNameError(true)
            setPasswordError(true)
        } else if (!name) {
            setNameError(true)
            setPasswordError(false)
        }
        else if (!password) {
            setPasswordError(true)
            setNameError(false)
        }
        else {
            setNameError(false)
            setPasswordError(false)
            props.navigation.navigate("Products")
        }

        // if (!password){
        //     setPasswordError(true)
        // }else{
        //     setPasswordError(false)
        // }
        // props.navigation.navigate("SignUp")
    }
    return (
        <View style={styles.main}>
            <View style={{ height: 150, alignItems: 'center' }} >
                <Animated.View style={{ transform: [{ rotate: spin }] }}>
                    <Image style={{ width: 130, height: 130, tintColor: "gray" }}
                        source={require('./Images/setting.png')}
                    />
                </Animated.View>

            </View>

            <Text style={{ fontSize: 20, color: "gray", textAlign: 'center', margin: 10 }}>Login Here</Text>
            <View
                style={styles.txtStyle}>
                <TextInput
                    style={styles.txtInputStyle}
                    placeholder="Login-Id"
                    onChangeText={(txt) => setName(txt)}
                //onChangeText={(txt) => this.updateName(txt)}
                />
            </View>
            {
                nameError ?
                    <Text style={{ fontSize: 10, color: "red", marginLeft: 30 }}>Please enter user name </Text> : null
            }
            <View style={{ height: 10 }} />
            {/* <View  style={styles.main}> */}
            <View
                style={[styles.txtStyle]}>
                <TextInput
                    style={{ marginLeft: 10, height: 50, fontSize: 18,flex:0.98, }}
                    secureTextEntry={show}
                    placeholder="Password"
                    onChangeText={(txt) => setPassword(txt)} />
                {
                    show ? <TouchableHighlight onPress={() => setShow(false)}>
                        <Image style={{ width: 30, height: 20, tintColor: "gray", }}
                            source={require('./Images/open-eye.png')}
                        />
                    </TouchableHighlight > :
                        <TouchableHighlight onPress={() => setShow(true)}>
                            <Image style={{ width: 30, height: 20, tintColor: "gray", }}
                                source={require('./Images/close-eye.png')}
                            />
                        </TouchableHighlight>
                }
            </View>
        {/* </View> */}
            {
        passwordError ?
            <Text style={{ fontSize: 10, color: "red", marginLeft: 20 }}>Please enter password </Text> : null
    }
            <View style={{ height: 40 }} />
            <TouchableHighlight onPress={() => validateLogin()}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Success</Text>
                </View>
            </TouchableHighlight>
            <View style={{ height: 50 }} />
            <TouchableHighlight onPress={() => props.navigation.navigate("SignUp")}>
                <View >
                    <Text style={{ color: 'gray', textAlign: "center", fontSize: 20, }}>SignUp</Text>
                </View>
            </TouchableHighlight>
        </View >

    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    btnText: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    btn: {
        backgroundColor: 'gray',
        borderRadius: 15,
        padding: 10,
        marginHorizontal: 30,
        marginVertical: 10,
        elevation: 5,
        shadowOpacity: 0.3,
        shadowColor: 'black',
    },
    txtStyle: {
        marginHorizontal: 30,
        marginVertical: 10,
        borderBlockColor: 'grey',
        borderWidth: 2.0,
        height: 50,
        borderRadius: 15,
        flexDirection: "row",
        alignItems:"center"
    },
    txtInputStyle: { marginLeft: 10, height: 50, fontSize: 18 }
})