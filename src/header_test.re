open Jest;

describe "Header component" (fun () => {
  open Expect;

  test "renders children" (fun () => {
    let expectedNode = (ReasonReact.stringToElement "Test Header");
    let wrapper =
      Enzyme.shallow
        <Header> expectedNode </Header>;


    expect (Enzyme.contains expectedNode wrapper) |> toBe true;
  })
});
