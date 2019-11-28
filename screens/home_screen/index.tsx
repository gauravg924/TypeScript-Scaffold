import React, { useState, Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
    NavigationScreenComponent,
    NavigationScreenProp,
    NavigationStackScreenOptions
} from "react-navigation";
import { ROUTES } from "../../routes";
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
type FormElem = React.FormEvent<HTMLFormElement>


export const HomeScreen: NavigationScreenComponent<{}> = ({navigation}) => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleLogin = (): void => {
        if(username === '123' && password === '1234'){
            navigation.navigate(ROUTES.MainDetails, {username : username, password : password})    
        }
    }

    return (
        <Content>
            <Form>
                <Item floatingLabel>
                    <Label>Username</Label>
                    <Input
                        type='text'
                        value={username}
                        onChangeText={value => setUsername(value)} />
                </Item>
                <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input
                        type='password'
                        value={password}
                        onChangeText={value => setPassword(value)}
                    />
                </Item>
            </Form>
            <Button info style={styles.sign_in_button} onPress={() => handleLogin()}><Text> Info </Text></Button>
        </Content>
    );
};


HomeScreen.navigationOptions = (
    screenProps: NavigationScreenProp
): NavigationStackScreenOptions => {
    return {
        headerStyle: {
            elevation: 0,
            backgroundColor: "#ffffff"
        },
    };
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    sign_in_button: {
        width: 50,
        alignContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        color: '#ffffff'
    }
});



// import { StackNavigator, NavigationScreenProp } from 'react-navigation';

//     export interface HomeScreenProps {
//       navigation: NavigationScreenProp<any,any>
//     };

//     export class HomeScreen extends React.Component<HomeScreenProps, object> {

//       render() {
//         return (
//           <View style={styles.container}>       
//             <Button
//               title="Go to Details"
//               onPress={() => this.props.navigation.navigate('Details')}
//             />
//           </View>
//         );
//       }
//     }