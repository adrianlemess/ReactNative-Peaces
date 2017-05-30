import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = {
        loggedIn: null
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDjdZ17OJWC6va0cHVU-WU_mhCYfqI18ic',
            authDomain: 'auth-13875.firebaseapp.com',
            databaseURL: 'https://auth-13875.firebaseio.com',
            projectId: 'auth-13875',
            storageBucket: 'auth-13875.appspot.com',
            messagingSenderId: '907477454208'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={styles.spinnerContainerStyle}>
                        <Spinner size="large" />
                    </View>
                );
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View >
                    <Header headerTitle="Authentication" />
                </View>
                {this.renderContent()}
            </View>

        );
    }
}

const styles = {
    spinnerContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }
};
export default App;
