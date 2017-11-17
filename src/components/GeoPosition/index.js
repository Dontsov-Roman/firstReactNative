import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
} from 'react-native';

export default class GeoPosition extends Component{

    watchID = null;

    static propTypes = {
        onChange:PropTypes.func
    };

    static defaultProps = {};

    constructor(props){
        super(props);
        this.state = {
            initialPosition:null,
            lastPosition:null
        }
    }

    componentDidMount(){
        const {onChange} = this.props;
        navigator.geolocation.getCurrentPosition(
            position => {
                const initialPosition = JSON.stringify(position);
                this.setState({initialPosition});
            },
            error => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.watchID = navigator.geolocation.watchPosition(position => {
            const lastPosition = JSON.stringify(position);
            onChange?onChange(position):'';
            this.setState({lastPosition});
        });
    }

    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.watchID);
    }

    render(){
        const {initialPosition,lastPosition} = this.state;
        return(
            <View>
                <Text>Initial position:{initialPosition}</Text>
                <Text>Current position:{lastPosition}</Text>
            </View>
        )
    }
}