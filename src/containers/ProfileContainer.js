import {connect} from 'react-redux'
import Profile from '../components/Profile/Profile';
import {profile} from '../services/actions/profile'


const mapStateToProps=state=>({
    profileData:state.getProfile
})
const mapDispatchToProps=dispatch=>({
    profileHandler: data=>dispatch(profile(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile)