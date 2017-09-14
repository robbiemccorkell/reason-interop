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
  switch optionState {
  | Some state =>
    switch actionType {
    | ReceiveTopStories => {"stories": action##payload##stories, "loaded": Js.true_}
    | RequestTopStories => {"stories": [||], "loaded": Js.false_}
    | Other _ => state
    }
  | None => initialState
  }
};

let default = reducer;
