export function setEntries(state: {}, entries: string[]): {} {
  return {
    ...state,
    entries
  }
}

export function next(state: { entries: string[] }): {} {
  const entries: string[] = state.entries;

  return {
    ...state,
    vote: {
      pair: [entries[0], entries[1]]
    },
    entries: [...entries.slice(2)]
  };
}