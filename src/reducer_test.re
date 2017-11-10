open Jest;

describe(
  "reducer",
  () => {
    open Expect;
    test(
      "returns initial state when state is undefined",
      () => {
        let stories: array(Reducer.story) = [||];
        let action = {"_type": "SOME_ACTION", "payload": {"stories": stories}};
        let state = Reducer.reducer(Js.Nullable.undefined, action);
        expect(state) |> toEqual({"stories": stories, "loaded": Js.false_})
      }
    );
    test(
      "returns current state if action unrecognised",
      () => {
        let stories: array(Reducer.story) = [||];
        let action = {"_type": "SOME_ACTION", "payload": {"stories": stories}};
        let state = Reducer.reducer(Js.Nullable.undefined, action);
        expect(state) |> toEqual(Reducer.initialState)
      }
    );
    test(
      "adds stories to state on RECEIVE_TOP_STORIES",
      () => {
        let stories: array(Reducer.story) = [|
          {id: 1, title: "", url: ""},
          {id: 2, title: "", url: ""}
        |];
        let action = {"_type": "RECEIVE_TOP_STORIES", "payload": {"stories": stories}};
        let state = Reducer.reducer(Js.Nullable.return(Reducer.initialState), action);
        expect(state) |> toEqual({"stories": stories, "loaded": Js.true_})
      }
    )
  }
);
