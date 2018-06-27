export type EntriesState = {
  entries: string[];
  vote: {
    pair: string[];
    tally?: {
      [key: string]: number;
    }
  }
  winner?: string;
};

export const INITIAL_STATE: EntriesState = {
  entries: [],
  vote: {
    pair: []
  }
};

export function setEntries(state: EntriesState, entries: EntriesState['entries']): {} {
  return {
    ...state,
    entries
  };
}

function getWinners(vote: EntriesState['vote']): string[] {
  if (!vote.pair.length) return [];

  const [a, b] = vote.pair;
  const aVotes: number = vote.tally && vote.tally[a] ? vote.tally[a] : 0;
  const bVotes: number = vote.tally && vote.tally[b] ? vote.tally[b] : 0;

  if (aVotes > bVotes) return [a];
  if (aVotes < bVotes) return [b];

  return [a, b];
}

export function next(state: EntriesState): {} {
  const entries: EntriesState['entries'] = [
    ...state.entries,
    ...getWinners(state.vote)
  ];
  
  if (entries.length === 1) {
    return {
      ...INITIAL_STATE,
      winner: entries[0]
    };
  }

  return {
    ...state,
    vote: {
      tally: {},
      pair: [entries[0], entries[1]],
    },
    entries: [...entries.slice(2)]
  };
}

export function vote(voteState: EntriesState['vote'], entry: string): {} {
  const entryTally = voteState.tally && voteState.tally[entry] 
    ? voteState.tally[entry] + 1 
    : 1;

  return {
    ...voteState,
    tally: {
      ...voteState.tally,
      [entry]: entryTally
    }
  };
}