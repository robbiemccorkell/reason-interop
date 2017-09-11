let component = ReasonReact.statelessComponent "ReasonComp";

let make _children => {
  ...component,
  render: fun _self =>
    <div> (ReasonReact.stringToElement "React reason component") </div>
};

let default = ReasonReact.wrapReasonForJs ::component (fun _ => make [||]);
