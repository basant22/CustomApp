import React, { useState } from "react";
import { StyleSheet, Button, View, Modal, Text, TouchableHighlight ,Pressable} from "react-native";

const MyModal = () => {
    const [show,setShow] = useState(false)
  const  showDialog = () => {
        setShow(true)
    }
  const  hideDialog = () => {
        setShow(false)
    }

    return (
        <View style={styles.main}>
            <Modal transparent={true} visible={show} animationType="fade">
                <View style={styles.centeredView}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>This is modal example</Text>
                        <TouchableHighlight onPress={hideDialog}>
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>Close</Text>
                            </View>
                        </TouchableHighlight>
                        <Pressable 
                        //onPress={hideDialog}
                        onLongPress={()=>console.warn("long press")}
                        onPressIn={()=>console.warn("onPressIn")}
                        onPressOut={()=>console.warn('onPressOut')}
                        >
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>Press</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <View style={styles.btnView}>
                <Button title='Show Dialog' onPress={showDialog} />
            </View>
            <View style={{ height: 50 }} />
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    btnView: {
        flex: 1,
        justifyContent: 'flex-end',

        //  alignContent:'flex-end'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 40,
        borderRadius: 20,
        shadowColor: 'black',
        elevation: 5,
        shadowOpacity: 0.5

    },
    buttonStyle: {
        backgroundColor: 'skyblue',
        padding: 5,
        borderRadius: 10,

    },
    modalText: {
        fontSize: 18
    },
    btnText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
    },
    btn: {
        backgroundColor: 'gray',
        borderRadius: 15,
        padding: 10,
        margin: 10,
        elevation: 5,
        shadowOpacity: 0.3,
        shadowColor: 'black',
    },

})
export default MyModal