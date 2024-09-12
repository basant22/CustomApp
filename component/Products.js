import React from "react";
import { Button, ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";

import Header  from "../component/Header";
import ProductList from "./ProductList";
const Products = (props) => {
    const products = [
        {
            'name': 'Product-1',
            'price': 300
        },
        {
            'name': 'Product-2',
            'price': 400
        },
        {
            'name': 'Product-3',
            'price': 500
        },
        {
            'name': 'Product-4',
            'price': 600
        },
        {
            'name': 'Product-5',
            'price': 700
        },
        {
            'name': 'Product-6',
            'price': 800
        },
        {
            'name': 'Product-7',
            'price': 500
        },
        {
            'name': 'Product-8',
            'price': 600
        },
        {
            'name': 'Product-9',
            'price': 700
        },
        {
            'name': 'Product-10',
            'price': 800
        },
    ]
   
    return (
        <View style={styles.main}>
            <View style={{backgroundColor:'orange',alignItems:'center',padding:10}}>
                <Button title="User-List" onPress={()=>props.navigation.navigate("SaveForm")}/>
            </View>
           <Header/>
            <ScrollView>
            <View style={styles.productCell1}>
                {
                    products.length ? products.map((product) =>
                       <ProductList  product ={product}/>
                    ) : null
                }
            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    productCell1: {
        // flex: 0.70,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
})
export default Products