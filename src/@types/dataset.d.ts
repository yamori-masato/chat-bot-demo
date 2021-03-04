declare type Data = {
  answers: {
    content: string,
    nextId: string
  }[],
  question: string
}

declare type Dataset = {
  [key: string]: Data
}
