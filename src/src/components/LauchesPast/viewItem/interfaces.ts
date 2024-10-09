

export interface viewItem {
  id: string,
  launch_date_local: Date,
  mission_name: string,
  rocket: {
    rocket_name: string
  },
  links: {
    video_link: string,
    mission_patch_small: string
  }
}

export interface Item {
  launch: viewItem;
}