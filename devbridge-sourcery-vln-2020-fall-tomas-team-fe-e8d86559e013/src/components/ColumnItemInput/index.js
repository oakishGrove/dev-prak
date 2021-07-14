import { connect } from 'react-redux';
import { addItem, removeColumnInput } from '../../pages/Board/store/boardActions';
import ColumnItemInput from './ColumnItemInput';

const mapDispatchToProps = {
  addItem,
  removeColumnInput,
};

export default connect(null, mapDispatchToProps)(ColumnItemInput);
