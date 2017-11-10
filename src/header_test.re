open Jest;

describe(
  "Header component",
  () =>
    Expect.(
      test(
        "renders children",
        () => {
          let expectedNode = ReasonReact.stringToElement("Test Header");
          let wrapper = Enzyme.shallow(<Header> expectedNode </Header>);
          expect(Enzyme.contains(expectedNode, wrapper)) |> toBe(true)
        }
      )
    )
);
