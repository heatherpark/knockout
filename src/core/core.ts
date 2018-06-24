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

  return {
    ...state,
    vote: {
      ...state.vote,
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