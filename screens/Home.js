import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import { Paragraph } from 'react-native-paper'
import { getData } from '../core/storageApi'
import { SparklesIcon } from "react-native-heroicons/solid";

const Home = () => {
    const [token, setToken] = useState({})
    useLayoutEffect(() => {
        getData("token").then((value) => {
            console.log(value)
            setToken(JSON.parse(value))
        })
    }, [])
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Background>
                <Logo />
                <SparklesIcon />
                <Header>Hi {token.name}, welcome to the Student App</Header>
                <Paragraph>
                    This is your id: {token.id}
                    Scan the code on the class App to register/mark attendance
                </Paragraph>
            </Background>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
})