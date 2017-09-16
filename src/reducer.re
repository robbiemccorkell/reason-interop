open Actions_re;

type story = {
  id: int,
  title: string,
  url: string
};

type state = Js.t {. stories : array story, loaded: Js.boolean};

let initialState: state = {"stories": [||], "loaded": Js.false_};

let reducer state action => {
  let optionState = Js.Nullable.to_opt state;
  let actionType = decodeActionType action##_type;
  switch (optionState, actionType) {
  | (Some _, ReceiveTopStories) => {"stories": action##payload##stories, "loaded": Js.true_}
  | (Some _, RequestTopStories) => {"stories": [||], "loaded": Js.false_}
  | (Some state, Other _) => state
  | (None, _) => initialState
  }
};

let default = reducer;
