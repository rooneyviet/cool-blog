export interface SideBarParentItemType {
  id: string;
  name: string;
  children: SideBarChildItemType[];
}

export interface SideBarChildItemType {
  hrefURL: string;
  name: string;
  icon?: string;
  isActive: boolean;
}
