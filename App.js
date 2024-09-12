/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
//import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from 'react-native';
import GridTest from './GridTest';
import NewComponent from './NewComponent';
import ShowHeader from './HeaderList';
import Students from './component/Students';
import ShowHide from './component/ShowHide';
import MyButton from './component/HighLightButton';
import Indicator from './component/ActivityIndc';
import MyModal from './component/MyModal';
import CustomModal from './component/CustomModal';
import LoginView from './component/Login';
import  SignUp  from './component/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UserPosts from './component/userPost';
import SaveForm from './component/SaveData';
import UpdateUser from './component/UpdateUser';
import Products from './component/Products'
import UserList from './component/UserList';
import imgRight from './component/Images/setting.png';
const Stack = createNativeStackNavigator();
 const Tab = createBottomTabNavigator();
//const Tab = createMaterialTopTabNavigator();
function App() {
  const user = [
    {
      id: "1",
      name: "Awwww"
    },
    {
      id: "2",
      name: "Beeee"
    },
    {
      id: "3",
      name: "Cfffff"
    },
    {
      id: "4",
      name: "Dwwwww"
    },
    {
      id: "5",
      name: "Errrrrrdd"
    },
    {
      id: "6",
      name: "Awwww"
    },
    {
      id: "7",
      name: "Beeee"
    },
    {
      id: "8",
      name: "Cfffff"
    },
    {
      id: "9",
      name: "Dwwwww"
    },
    {
      id: "10",
      name: "Errrrrrdd"
    },
    {
      id: "11",
      name: "Awwww"
    },
    {
      id: "12",
      name: "Beeee"
    },
    {
      id: "13",
      name: "Cfffff"
    },
    {
      id: "14",
      name: "Dwwwww"
    },
    {
      id: "15",
      name: "Errrrrrdd"
    }
  ]
  const [show, setShow] = useState(false)
  const styles = StyleSheet.create({
    item: {
      fontSize: 20,
      padding: 10,
      color: "#fff",
      backgroundColor: "blue",
      borderColor: "green",
      borderWidth: 5,
      margin: 10,
    }
  })
{/*return(
<NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen name='Login' component={LoginView}/>
    <Tab.Screen name='SignUp' component={SignUp}/>
    <Tab.Screen name='UserPosts' options={{
      headerRight: () => <Button color='black' title='Refresh' onPress={()=>setShow(true)} />
    }} component={UserPosts}/>
    <Tab.Screen name='SaveForm' component={SaveForm}/>
  </Tab.Navigator>
</NavigationContainer>
);*/}
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: 'skyblue' },
        headerTitleStyle: { fontSize: 20 },
        headerTintColor: 'white'
      }}>
        <Stack.Screen name='Login' component={LoginView} options={{

          // headerLeft: () => <Button color='white' title='Register User' />,
          // headerTitle:()=><Button color='white' title='User'/>,
          // headerRight: () => <Button color='white' title='Forgot' />,
          // title:'User Login',
          headerRight:()=> <Pressable onPress={() => {}}>
          <Image style={{ width: 40,height: 40,tintColor:"white"}}
            source={require('./component/Images/setting.png')}
          />
        </Pressable>,
          headerStyle: { backgroundColor: 'green' },
          headerTitleStyle: { fontSize: 20 },
          headerTintColor: 'white'
        }} />
        <Stack.Screen name='CustomModal' component={CustomModal} />
        <Stack.Screen name='SignUp' component={SignUp}  />
        <Stack.Screen name='SaveForm' component={SaveForm} />
        <Stack.Screen name='UserPosts' component={UserPosts} />
        <Stack.Screen name='UpdateUser' component={UpdateUser} />
        <Stack.Screen name='Products' component={Products} />
        <Stack.Screen name='UserList' component={UserList} />
        
        {/* <View style={{ flex: 1 }}> */}
        {/* <View style={{ height: 60 }}/> */}
        {/* <MyModal/> */}
        {/* <CustomModal/> */}
        {/* <Text style={{ fontSize: 40 }}>List Of users</Text> */}

        {/* <Button title='Submit' onPress={() => setShow(!show)} /> */}
        {/* <Indicator /> */}
        {/* <MyButton/> */}
        {/* {
        show ? <ShowHide /> : null
      } */}
        {/* <ShowHide show = {show}/> */}
        {/* <ShowHeader/>
      <Students/> */}
        {/* <FlatList
                data={user}
                renderItem={({item}) => <NewComponent item={item}/>
                }
            /> */}
        {/* <GridTest/> */}
        {/* <NewComponent/> */}

        {/* <ScrollView>
      {
        user.map((item)=><Text style={styles.item}>{item.name}</Text>)
      }
      </ScrollView> */}
        {/* <FlatList 
      data={user}
      renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
      keyExtractor={item => item.id}
      /> */}
        {/* </View> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
