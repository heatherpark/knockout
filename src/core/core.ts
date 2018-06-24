export const INITIAL_ENTRIES_STATE: EntriesState = {
  entries: [],
  vote: {
    pair: [],
    tally: {}
  }
};

export interface EntriesState {
  entries: string[];
  vote: {
    pair: string[];
    tally: {
      [key: string]: number;
    }
  }
  winner?: string;
}

export function setEntries(state: EntriesState, entries: string[]): {} {
  return {
    ...state,
    entries
  };
}

function getWinners(vote: EntriesState['vote']): string[] {
  if (!vote.pair.length) return [];

  const [a, b] = vote.pair;
  const aVotes: number = vote.tally[a] ? vote.tally[a] : 0;
  const bVotes: number = vote.tally[b] ? vote.tally[b] : 0;

  if (aVotes > bVotes) return [a];
  if (aVotes < bVotes) return [b];

  return [a, b];
}

export function next(state: EntriesState): {} {
  const entries: string[] = [
    ...state.entries,
    ...getWinners(state.vote)
  ];
  
  if (entries.length === 1) {
    return {
      ...INITIAL_ENTRIES_STATE,
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

export function vote(state: EntriesState, entry: string): {} {
  const entryTally = state.vote.tally[entry] 
    ? state.vote.tally[entry] + 1 
    : 1;

  return {
    ...state,
    vote: {
      ...state.vote,
      tally: {
        ...state.vote.tally,
        [entry]: entryTally
      }
    }
  };
}