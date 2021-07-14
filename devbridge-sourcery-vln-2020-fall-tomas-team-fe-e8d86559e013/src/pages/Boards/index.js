import { connect } from 'react-redux';
import Boards from './Boards';
import { initiateBoardDetailsFetch } from './store/boardDetailsSlice';
import fetchBoards from './store/boardsActions';
import { getBoardsItems, getIsLoadingBoardsItems } from './store/boardsSelectors';

const mapStateToProps = state => ({
  boards: getBoardsItems(state),
  isLoading: getIsLoadingBoardsItems(state),
  isBoardDetailsShowing: state.boardDetails.isBoardDetailsShowing,
});

const mapDispatchToProps = {
  fetchBoards,
  initiateBoardDetailsFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
