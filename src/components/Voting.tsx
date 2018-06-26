import * as React from 'react';
import { connect } from 'react-redux';

import Vote from './Vote';
import Winner from './Winner';

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
  pair: state.vote.pair,
  winner: state.winner
});

export default connect(mapStateToProps)(Voting);