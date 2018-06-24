interface EntriesState {
  entries: string[];
  vote: {
    pair: string[];
    tally: {
      [key: string]: number;
    }
  }
}

export function setEntries(state: EntriesState, entries: string[]): {} {
  return {
    ...state,
    entries
  }
}

export function next(state: EntriesState): {} {
  const entries: string[] = state.entries;

  return {
    ...state,
    vote: {
      pair: [entries[0], entries[1]]
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