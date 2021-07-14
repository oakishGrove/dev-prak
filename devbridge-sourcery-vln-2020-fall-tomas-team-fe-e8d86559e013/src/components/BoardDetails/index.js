import { connect } from 'react-redux';
import BoardDetails from './BoardDetails';
import {
  initiateBoardDetailsFetch,
  closeBoardDetails,
} from '../../pages/Boards/store/boardDetailsSlice';
import {
  getBoard,
  getBoardDetails,
  isBoardDetailsLoading,
  isBoardDetailsShowing,
} from '../../pages/Boards/store/boardDetailsSelectors';

const mapStateToProps = state => ({
  board: getBoard(state),
  boardDetails: getBoardDetails(state),
  isBoardDetailsLoading: isBoardDetailsLoading(state),
  isBoardDetailsShowing: isBoardDetailsShowing(state),
});

const mapDispatchToProps = {
  initiateBoardDetailsFetch,
  closeBoardDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardDetails);
