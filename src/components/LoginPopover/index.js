import { connect } from 'react-redux';
import LoginPopover from './LoginPopover';
const mapStateToProps = state => ({
    login: state
});

export default connect(mapStateToProps, null)(LoginPopover);