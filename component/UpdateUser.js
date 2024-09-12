import { useState, useEffect } from "react";
import React from "react";
import { Button, ScrollView, StyleSheet, Text, View, TouchableHighlight, Modal, TextInput } from "react-native";

const UpdateUser = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [posts, setPosts] = useState([]);
    const [userId, setuserId] = useState(0);
    const [showIndicator, setShowIndicator] = useState(false)
    const [selectedUser, setSelectedUser] = useState(undefined)


    const fetchUser = async () => {
        setShowIndicator(true)
        const url = 'http://192.168.29.26:3000/users';
        // const url = 'https://jsonplaceholder.typicode.com/posts';
        let result = await fetch(url);
        result = await result.json();
        setPosts(result);
        setShowIndicator(false);
    }
    const deleteUser = async (id) => {
        // setShowIndicator(true)
        const url = 'http://192.168.29.26:3000/users';
        // const url = 'https://jsonplaceholder.typicode.com/posts';
        let result = await fetch(`${url}/${id}`, {
            method: 'delete',
            // headers:{'Content-Type':'application/json'},
            // body:data
        });
        result = await result.json();
        if (result) {
            fetchUser()
        }
        // setShowIndicator(false);
    }
    const updateUser = (item) => {
        setShowDialog(true);
        setSelectedUser(item);
    }
    useEffect(() => {
        //  console.warn("onLoad once")
        fetchUser()
    }, [])
    return (
        <View style={styles.main}>
            <View style={styles.dataWrapper}>
                <View style={{ flex: 1 }} ><Text style={{ textAlign: 'left', fontSize: 20 }} >Name</Text></View>
                <View style={{ flex: 1 }}><Text style={{ textAlign: 'left', fontSize: 20 }}>Age</Text></View>
                <View style={{ flex: 1.3 }}><Text style={{ textAlign: 'center', fontSize: 20 }}>Operations</Text></View>
            </View>
            <ScrollView>
                {
                    posts.length ?
                        posts.map((item) => <View style={styles.dataWrapper}>
                            <View style={{ flex: 1 }} ><Text>{item.name}</Text></View>
                            <View style={{ flex: 1 }}><Text>{item.age}</Text></View>
                            <TouchableHighlight onPress={() => updateUser(item)}>
                                <View style={styles.btnStyleUpdate}>
                                    <Text style={styles.btnText}>Update</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => deleteUser(item.id)}>
                                <View style={styles.btnStyleDelete}>
                                    <Text style={styles.btnText}>Delete</Text>
                                </View>
                            </TouchableHighlight>
                        </View>)
                        : null
                }
            </ScrollView>
            <Modal visible={showDialog} transparent={true}>
                <DialogModal setShowDialog={setShowDialog} selectedUser={selectedUser} fetchUser={fetchUser} />
            </Modal>
        </View>
    )
}
const DialogModal = (props) => {
    const [name, setName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [age, setAge] = useState(undefined);
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [ageError, setAgeError] = useState(false)
    const updateUserApi = async () => {
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
        if (!age) {
            setAgeError(true)
        } else {
            setAgeError(false)
        }
        if (!name || !age || !email) {
            return false
        }
        const data = {
            name: name,
            email: email,
            age: age
        }
        const url = 'http://192.168.29.26:3000/users';
        // const url = 'https://jsonplaceholder.typicode.com/posts';
        let result = await fetch(`${url}/${props.selectedUser.id}`, {
            method: 'Put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        result = await result.json();
        if (result) {
            props.setShowDialog(false)
            props.fetchUser()
            // props.navigation.navigate("UserPosts",{name})
        }
    }
    useEffect(() => {
        if (props.selectedUser) {
            setName(props.selectedUser.name)
            setEmail(props.selectedUser.email)
            setAge(props.selectedUser.age.toString())
        }
    }, [props.selectedUser])
    return (
        <View style={styles.centerModal}>
            <View style={styles.modalView}>
                <Text style={{ textAlign: 'center', fontSize: 18 }}>Update User</Text>
                <View style={{ height: 10 }} />
                <View style={styles.viewInput}>
                    <TextInput value={name} placeholder="Name"
                        onChangeText={(txt) => setName(txt)} />
                </View>
                {
                    nameError ? <Text style={styles.errorText}>Please enter your name</Text> : null
                }
                <View style={styles.viewInput}>
                    <TextInput value={email} placeholder="Email"
                        onChangeText={(txt) => setEmail(txt)}
                    />
                </View>
                {
                    emailError ? <Text style={styles.errorText}>Please enter your email</Text> : null
                }
                <View style={styles.viewInput}>
                    <TextInput value={age} placeholder="Age"
                        onChangeText={(txt) => setAge(txt)} />
                </View>
                {
                    ageError ? <Text style={styles.errorText}>Please enter your age</Text> : null
                }
                <View style={{ height: 15 }} />
                <TouchableHighlight onPress={updateUserApi}>
                    <View style={styles.btnDialog}>
                        <Text style={styles.btnText}>Update</Text>
                    </View>
                </TouchableHighlight>
                <View style={{ height: 15 }} />
                <TouchableHighlight onPress={() => props.setShowDialog(false)}>
                    <View style={[styles.btnDialog, styles.btnBackColor]}>
                        <Text style={styles.btnText}>Close</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    dataWrapper: {
        // flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'skyblue',
        marginHorizontal: 10,
        marginVertical: 6,
        padding: 8,
        alignItems: 'center'
    },
    btnStyleUpdate: {
        flex: 1,
        backgroundColor: 'orange',
        borderRadius: 8,
        borderWidth: 1.0,
        padding: 5
    },
    btnStyleDelete: {
        flex: 1,
        backgroundColor: 'red',
        borderRadius: 10,
        borderWidth: 1.0,
        padding: 5,
        marginLeft: 4
    },
    btnDialog: {
        //  flex: 1,
        backgroundColor: 'orange',
        borderRadius: 10,
        borderWidth: 1.0,
        padding: 8,
        marginLeft: 4
    },
    btnBackColor: { backgroundColor: 'green' },
    btnText: {
        textAlign: 'center',
        fontSize: 15,
        fontStyle: 'normal',
        color: '#fff',
    },
    centerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'orange',
        // width:300,
        // height:300
    },
    modalView: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 0.50,
        elevation: 5,
        width: 300
    },
    viewInput: {
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 1.0,
        padding: 10,
        borderColor: 'gray'
    },
})
export default UpdateUser