import { connect } from 'react-redux';
import Board from './Board';
import { getBoardColumns, getBoardTitle } from './store/boardSelectors';
import { fetchBoard, loadWsRoom } from './store/boardActions';

const mapStateToProps = state => ({
  columns: getBoardColumns(state),
  title: getBoardTitle(state),
});

const mapDispatchToProps = {
  fetchBoard,
  loadWsRoom,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
