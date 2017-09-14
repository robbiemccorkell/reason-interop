open Actions;

type actionType =
  | ReceiveTopStories
  | RequestTopStories
  | Other string;

let decodeActionType =
  fun
  | "RECEIVE_TOP_STORIES" => ReceiveTopStories
  | "REQUEST_TOP_STORIES" => RequestTopStories
  | actionType => Other actionType;

let encodeActionType =
  fun
  | ReceiveTopStories => "RECEIVE_TOP_STORIES"
  | RequestTopStories => "REQUEST_TOP_STORIES"
  | Other actionType => actionType;
