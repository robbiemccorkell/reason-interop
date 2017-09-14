// Generated by BUCKLESCRIPT VERSION 1.9.1, PLEASE EDIT WITH CARE
'use strict';


function decodeActionType(actionType) {
  switch (actionType) {
    case "RECEIVE_TOP_STORIES" : 
        return /* ReceiveTopStories */0;
    case "REQUEST_TOP_STORIES" : 
        return /* RequestTopStories */1;
    default:
      return /* Other */[actionType];
  }
}

function encodeActionType(param) {
  if (typeof param === "number") {
    if (param !== 0) {
      return "REQUEST_TOP_STORIES";
    } else {
      return "RECEIVE_TOP_STORIES";
    }
  } else {
    return param[0];
  }
}

exports.decodeActionType = decodeActionType;
exports.encodeActionType = encodeActionType;
/* No side effect */