type story = {
  id: int,
  title: string,
  url: string
};

type state = Js.t {. stories : array story};

let initialState: state = {"stories": [||]};

let reducer state action => {
  let optionState = Js.Nullable.to_opt state;
  switch optionState {
  | Some state =>
    switch action##_type {
    | "RECEIVE_TOP_STORIES" => {"stories": action##payload##stories}
    | _ => state
    }
  | None => initialState
  }
};

let default = reducer;
