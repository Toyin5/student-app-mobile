import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Profile from './Profile';
import About from './About';
import History from './History';
import { StyleSheet, Image, TouchOpacity, Text, View } from 'react-native'
import { HomeIcon, UserCircleIcon, CameraIcon, BriefcaseIcon, Cog8ToothIcon } from "react-native-heroicons/solid";

const HomePage = ({ navigation }) => {


    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <HomeIcon resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                color: focused ? '#e32f45' : '#748c94'
                            }} />
                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>HOME</Text>
                    </View>
                )
            }} />
            <Tab.Screen name='Scan' component={Profile} />
            <Tab.Screen name='Profile' component={Profile} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <UserCircleIcon resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                color: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>PROFILE</Text>
                    </View>
                )
            }} />
            <Tab.Screen name='About' component={About} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <BriefcaseIcon resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                color: focused ? '#e32f45' : '#748c94'
                            }} />
                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>ABOUT</Text>
                    </View>
                )
            }} />
            <Tab.Screen name='History' component={History} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Cog8ToothIcon resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                color: focused ? '#e32f45' : '#748c94'
                            }} />
                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>HISTORY</Text>
                    </View>
                )
            }} />
        </Tab.Navigator>
    )
}

export default HomePage

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7f5d70',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})