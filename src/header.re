let component = ReasonReact.statelessComponent "Header";

let make children => {
  ...component,
  render: fun _self => <div> (ReasonReact.arrayToElement children) </div>
};

let comp =
  ReasonReact.wrapReasonForJs
    ::component (fun jsProps => make jsProps##children);
