import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }
    onLoginFail(error) {
        this.setState({ error: error.message || 'Authentication Failed.', loading: false });
    }
    onLoginSucess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSucess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSucess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }


    renderButton() {
        if (this.state.loading) {
            return (<Spinner size="small" />);
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }


    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label={'E-mail'}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        placeholder="user@gmail.com"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label={'Password'}
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        placeholder="password"
                        secureTextEntry
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        paddingLeft: 5,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;