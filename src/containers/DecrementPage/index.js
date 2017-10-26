import React,{Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Link} from 'react-router-native';

import {paths} from '../../routes'
import {decorator} from '../InitPage'

export class DecrementPage extends Component{
    render(){
        const {value,actions} = this.props;
        return (
            <View>
                <Text>DecrementPage</Text>

                <Text>
                    {value}
                </Text>
                <Button
                    onPress={actions.decrement}
                    title="decrement"
                    color="#841584"
                    />
                <Link to={paths.home}>
                    <Text>
                        go to increment page
                    </Text>
                </Link>
            </View>
        )
    }
}

export default decorator(DecrementPage);
