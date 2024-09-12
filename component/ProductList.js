import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { addToCart,removeFromCart } from './Redux/action';
import { useDispatch, useSelector } from 'react-redux';

const ProductList = (props) => {
    const [isAdded, setIsAdded] = useState(false)
    const item = props.product
    const dipatch = useDispatch();
    const cartData = useSelector((state) => state.reducer)
    const handleAddToCart = (product) => {
        //console.warn(product)
        dipatch(addToCart(product));
    }
    const handleRemoveFromCart = (product) => {
        //console.warn(product)
        dipatch(removeFromCart(product.name));
    }
    useEffect(() => {
        let result = cartData.filter((element) => {
           return element.name === item.name
        })
        if (result.length) {
            //console.warn("true")
            setIsAdded(true)
        } else {
           // console.warn("false")
            setIsAdded(false)
        }
        // if (cartData && cartData.length) {
        //     cartData.forEach((product) => {
        //         if (product.name === item.name) {
        //             SetIsAdded(true)
        //         }
        //     });
        // }
    }, [cartData]);
    return (
        <View style={styles.productCell}>
            <Text style={styles.normalText}>{props.product.name}</Text>
            <Text style={styles.normalText}>price:${props.product.price}</Text>
            {
                isAdded ?
                    <TouchableHighlight onPress={() => handleRemoveFromCart(props.product)}>
                        <View style={[styles.btnView, styles.btnRemoveColor]}>
                            <Text style={styles.btnText}>Remove To Cart</Text>
                        </View>
                    </TouchableHighlight>
                    : <TouchableHighlight onPress={() => handleAddToCart(props.product)}>
                        <View style={styles.btnView}>
                            <Text style={styles.btnText}>Add To Cart</Text>
                        </View>
                    </TouchableHighlight>
            }

        </View>
    )
}
const styles = StyleSheet.create({
    productCell: {
        padding: 10,
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 12.0,
        borderWidth: 1.0,
        shadowOffset: 'black',
        backgroundColor: 'skyblue',
        shadowOpacity: 0.3,
        elevation: 5,
    },

    btnView: {
        backgroundColor: 'orange',
        borderRadius: 12.0,
        borderWidth: 2.0,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        elevation: 5,
        // marginHorizontal:10,
        marginTop: 25,
        // paddingHorizontal: 10,
        //  paddingVertical: 7,
        width: 150,
        height: 36,
        justifyContent: 'center',
        // alignItems:'center'
    },
    btnRemoveColor: { backgroundColor: 'green' },
    btnText: {
        fontSize: 15.0,
        color: 'black',
        textAlign: 'center'
    },
    normalText: {
        fontSize: 18.0,
        color: 'black',
        textAlign: 'center',
        paddingBottom: 4
    }
})
export default ProductList;