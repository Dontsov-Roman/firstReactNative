import Welcome from '../../components/Welcome';
import {connect} from 'react-redux';

export const decorator = connect(state => ({
    name:state.user.name
}))

export default decorator(Welcome);
