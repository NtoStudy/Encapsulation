export interface ListItem {
  avatar?: string;
  title?: string;
  desc?: string;
  time?: string;
  tag?: string;
  tagType?: ''|'info'|'success'|'warning'|'danger';
}

export interface ListOptions {
  title:String,
  content:ListItem[]
}

export interface ActionOptions {
  text:String,
  icon?:String
}
