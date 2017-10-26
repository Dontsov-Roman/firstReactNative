import React,{Component} from 'react';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {View, Text, TextInput, Button} from 'react-native';
import * as actions from '../../actions/user';

export class AuthForm extends Component{
    constructor(props){
        super(props);
        this.state = {name:(props.user && props.user.name)?props.user.name:''};
    }
    render(){
        const {onLogin} = this.props;
        const {name} = this.state;
        return(
            <View>
                <Text>Please enter your name</Text>
                <TextInput placeholder="Type name here" onChangeText={name=>this.setState({name})} value={name} />
                <Button title="Login" color="#ff0000" onPress={onLogin(name)} />
            </View>
        )
    }
}

export const decorator = connect(state => ({user:state.user}), dispatch => ({onLogin:name=>actions.enterName(name)(dispatch)}));

export default decorator(AuthForm);
