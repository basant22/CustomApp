import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const RadioButton = () => {
    const [selectedRadio, setselectedRadio] = useState(1)
    const skills = [
        {
            id:1,
            name:'JAVA'
        },
        {
            id:2,
            name:'PHP'
        },
        {
            id:3,
            name:'SWIFT'
        },
        {
            id:4,
            name:'FLUTTER'
        },
]
    return (
        <View style={styles.main}>
            {
                skills.map((item)=><TouchableOpacity onPress={() => setselectedRadio(item.id)}>
                <View style={styles.radioAlign}>
                    <View style={styles.radioOuter}>
                        {
                            selectedRadio === item.id ? <View style={styles.radioInner} /> : null
                        }
                    </View>
                    <Text style={styles.radioText}>{item.name}</Text>
                </View>
            </TouchableOpacity>)
            }
            
            {/* <TouchableOpacity onPress={() => setselectedRadio(2)}>
                <View style={styles.radioAlign}>
                    <View style={styles.radioOuter}>
                        {
                            selectedRadio === 2 ? <View style={styles.radioInner} /> : null
                        }
                    </View>
                    <Text style={styles.radioText}>Radio 1</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        //alignContent:'center',
       //alignItems:'center',
       //justifyContent:'space-between',
        padding:20
    },
    radioOuter: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 2.0,
        borderColor: 'blue',
        margin:5
    },
    radioInner: {
        height: 28,
        width: 28,
        borderRadius: 14,
        margin: 4,
        borderWidth: 2.0,
        backgroundColor: 'blue'
    },
    radioAlign: {
        flexDirection: 'row',
        alignItems:'center'
    },
    radioText: {
        fontSize: 20
    }
})
export default RadioButton