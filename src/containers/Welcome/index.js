import React,{Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import Welcome from '../../components/Welcome';

export const decorator = connect(state => ({
    name:state.user.name
}))

const ConnectedWelcome = decorator(Welcome);
export default ConnectedWelcome;

export function withWelcome(RealComponent){
    class W extends Component{
        render(){
            return <View>
                <ConnectedWelcome />
                <RealComponent {...this.props} />
            </View>
        }
    }
    return W;
}
