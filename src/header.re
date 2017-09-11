let component = ReasonReact.statelessComponent "Header";

let make _children => {
  ...component,
  render: fun _self =>
    <div> (ReasonReact.stringToElement "React Reason Hacker News") </div>
};

let comp = ReasonReact.wrapReasonForJs ::component (fun _ => make [||]);
