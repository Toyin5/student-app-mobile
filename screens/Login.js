import React, { useState, useLayoutEffect } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { getData, storeData } from '../core/storageApi'



export default function LoginScreen({ navigation }) {
    const [name, setName] = useState({ value: '', error: '' })
    const [id, setId] = useState({ value: '', error: '' })

    const onLoginPressed = async () => {
        const token = {
            name: name.value,
            id: id.value
        }
        console.log(token)
        // console.log(JSON.stringify(token))
        storeData("token", token).then((value) => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomePage' }],
            })

        })

    }

    useLayoutEffect(() => {
        getData("token").then((value) => {
            console.log(value)
            if (value) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomePage' }],
                })
            }
        })
    }, [])

    return (
        <Background>
            <BackButton />
            <Logo />
            <Header>Welcome Student...</Header>
            <TextInput
                label="Name"
                returnKeyType="next"
                value={name.value}
                onChangeText={(text) => setName({ value: text, error: '' })}
                error={!!name.error}
                errorText={name.error}
                autoCapitalize="none"
                autoCompleteType="text"
                textContentType="text"
                keyboardType="text"
            />
            <TextInput
                label="ID"
                returnKeyType="done"
                value={id.value}
                onChangeText={(text) => setId({ value: text, error: '' })}
                error={!!id.error}
                errorText={id.error}
                secureTextEntry
            />
            <View style={styles.forgotid}>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot your id? Ask your registrar</Text>
                </TouchableOpacity>
            </View>
            <Button mode="contained" onPress={onLoginPressed}>
                Login
            </Button>
            <View style={styles.row}>
                <Text>Note: </Text>
                <TouchableOpacity>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    forgotid: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})
