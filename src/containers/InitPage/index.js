import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Text, Button} from 'react-native';
import {Link} from 'react-router-native';

import {paths} from '../../routes'
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
            <View style={{flex:1}}>
                <Text>
                    {value}
                </Text>
                <Button
                    onPress={actions.increment}
                    title="increment"
                    color="#841584"
                />
                <Link to={paths.decrement}>
                    <Button
                        title="go to decrement page"
                    />
                </Link>
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
