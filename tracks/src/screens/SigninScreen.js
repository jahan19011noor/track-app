import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const SigninScreen = ({navigation}) => {
    return (
        <View>
            <Text style={{fontSize: 48}}>Signin Screen</Text>
            <Button 
                title="Go to Signup"
                onPress={()=> navigation.navigate("Signup")}    
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default SigninScreen