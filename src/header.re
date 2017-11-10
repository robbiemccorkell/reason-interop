let component = ReasonReact.statelessComponent("Header");

let make = (children) => {
  ...component,
  render: (_self) => <div> (ReasonReact.arrayToElement(children)) </div>
};

let comp = ReasonReact.wrapReasonForJs(~component, (jsProps) => make(jsProps##children));
