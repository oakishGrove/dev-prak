import { connect } from 'react-redux';
import LogOutButton from './LogOutButton';
import { logOut } from '../../pages/Login/store/loginSlice';
import { getCurrentUser } from '../../pages/Login/store/loginSelectors';

const mapStateToProps = state => ({
  user: getCurrentUser(state),
});

const mapDispatchToProps = {
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogOutButton);
