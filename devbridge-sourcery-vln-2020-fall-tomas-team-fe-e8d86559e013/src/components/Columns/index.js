import { connect } from 'react-redux';
import { dragDropItem } from '../../pages/Board/store/boardActions';
import Columns from './Columns';

const mapDispatchToProps = {
  dragDropItem,
};

export default connect(null, mapDispatchToProps)(Columns);
