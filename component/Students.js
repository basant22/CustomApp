import React, { Component } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import StudentDetail from "./StudentDetail";
class Students extends Component {
    constructor() {
        super();
        this.state = {
            name: "adsds",
        }
    }
    submit = () => {
        console.warn("submited");
    }
    updateName(val) {
        console.warn(val)
        this.setState({ name: val })
    }
    render() {
        return (
            <ScrollView>
            <View>
                <View style={{ height: 100 }}></View>

                <Text style={{ fontSize: 20, color: "red", textAlign: 'center', margin: 10 }}>{this.state.name}</Text>
                <View 
                style={{ margin: 10, borderBlockColor: 'grey', 
                borderWidth: 2.0, height: 50, borderRadius: 15, }}>
                    <TextInput
                        style={{ marginLeft: 10, height: 50, fontSize: 18 }}
                        placeholder="Enter your name"
                        onChangeText={(txt) => this.updateName(txt)} />
                </View>
                <Button title="Submit" onPress={this.submit} />
                <StudentDetail name={this.state.name} />
            </View>
            </ScrollView>
        );
    }
}
export default Students