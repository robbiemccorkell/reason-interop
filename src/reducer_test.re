open Jest;

describe
  "reducer"
  (
    fun () => {
      open Expect;
      test
        "returns initial state when state is undefined"
        (
          fun () => {
            let stories: array Reducer.story = [||];
            let action = {
              "_type": "SOME_ACTION",
              "payload": {"stories": stories}
            };
            let state = Reducer.reducer None action;
            expect state |> toEqual {"stories": stories}
          }
        );
      test
        "returns current state if action unrecognised"
        (
          fun () => {
            let stories: array Reducer.story = [||];
            let action = {
              "_type": "SOME_ACTION",
              "payload": {"stories": stories}
            };
            let state = Reducer.reducer None action;
            expect state |> toEqual Reducer.initialState
          }
        );
      test
        "adds stories to state on RECEIVE_TOP_STORIES"
        (
          fun () => {
            let stories: array Reducer.story = [|
              {id: 1, title: "", url: ""},
              {id: 2, title: "", url: ""}
            |];
            let action = {
              "_type": "RECEIVE_TOP_STORIES",
              "payload": {"stories": stories}
            };
            let state = Reducer.reducer (Some Reducer.initialState) action;
            expect state |> toEqual {"stories": stories}
          }
        )
    }
  );
