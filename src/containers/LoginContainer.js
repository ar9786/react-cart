import {connect} from 'react-redux'
import Login from '../components/Login/Login';
import {login} from '../services/actions/login'


const mapStateToProps=state=>({
    cartData:state
})
const mapDispatchToProps=dispatch=>({
    loginHandler: data=>dispatch(login(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)