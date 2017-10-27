import React,{Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import Welcome from '../../components/Welcome';

export const decorator = connect(state => ({
    user:state.user,
    name:state.user.name
}))

const ConnectedWelcome = decorator(Welcome);
export default ConnectedWelcome;

export function withWelcome(RealComponent){
    
    class W extends Component{
        render(){
            const {user} = this.props;
            return <View>
                <Welcome name={user.name} />
                <RealComponent {...this.props} />
            </View>
        }
    }

    return decorator(W);
}
