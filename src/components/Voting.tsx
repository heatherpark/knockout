import * as React from 'react';
import { connect } from 'react-redux';

import Vote from './Vote';
import Winner from './Winner';
import * as actions from '../store/actions/actions';

interface IProps {
  winner: string;
  hasVoted: string;
  pair: string[];
  vote: () => void;
}

export class Voting extends React.Component<IProps> {
  public render() {
    return (
      <div>
      {this.props.winner
        ? <Winner winner={this.props.winner} />
        : <Vote {...this.props} />}
    </div>
    );
  }
}

const mapStateToProps = state => ({
  hasVoted: state.hasVoted,
  pair: state.vote && state.vote.pair,
  winner: state.winner
});

const mapDispatchToProps = dispatch => ({
  vote: (entry: string) => dispatch(actions.vote(entry))
});

export default connect(mapStateToProps, mapDispatchToProps)(Voting);