import { connect } from 'react-redux';
import { clearErrors } from '../../actions/error_actions';
import AuthModal from './auth_modal';

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  null,
  mapDispatchToProps
)(AuthModal);
