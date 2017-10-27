import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Text, Button} from 'react-native';
import {Link} from 'react-router-native';

import ButtonRedirect from '../../components/ButtonRedirect';
import {paths} from '../../routes';
import * as actions from '../../actions/app';

export class InitPage extends Component{
    static defaultProps = {
        state:{
            testText:'text from defaultProps',
            value:'value from defaultProps state'
        },
        value:'value from defaultProps'
    }
    render(){
        const {value,actions} = this.props;
        return (
            <View>
                <Text>IncrementPage</Text>

                <Text>
                    {value}
                </Text>
                <Button
                    onPress={actions.increment}
                    title="increment"
                    color="#841584"
                    />
                <View>
                    <ButtonRedirect to={paths.decrement} title="go to decrement page" color="#00ff00" />
                </View>
            </View>
        )
    }
}

export const decorator = connect(state => {
    return{
        state:state.app,
        value:state.app.value
    }
}, dispatch => ({actions:bindActionCreators(actions,dispatch)}));
export default decorator(InitPage);
