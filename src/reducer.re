type story = {
  id: int,
  title: string,
  url: string
};

type state = Js.t {. stories : array story};

let initialState: state = {"stories": [||]};

let reducer state action =>
  switch state {
  | Some state =>
    switch action##_type {
    | "RECEIVE_TOP_STORIES" => {"stories": action##payload##stories}
    | _ => [%bs.raw "state"]
    }
  | None => initialState
  };
