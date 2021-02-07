export interface IButtonsAnimate {
  team: boolean
  home: boolean
  users: boolean
}

export interface IButton {
  onClick: () => void
  animate: boolean
}
