export interface IButtonsAnimate {
  user: boolean
  firmware: boolean
  list: boolean
}

export interface IButton {
  onClick: () => void
  animate: boolean
}
