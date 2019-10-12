export const checkPopperPosition = (parent, popper) => {
  const clientWidth = window.innerWidth
  const clientHeight = window.innerHeight
  const PADDING = 20

  const checkHorizonPosition = () => {
    if (parent.left <= popper.width) {
      return parent.left
    }
    if (clientWidth - parent.left <= popper.width) {
      return parent.left - (popper.width - parent.width)
    }
    return parent.left - popper.width / 2 + parent.width / 2
  }

  const checkVerticalPosition = () => {
    if (clientHeight - parent.top <= popper.height + PADDING) {
      return parent.top - popper.height - PADDING
    }
    return parent.top + parent.height + PADDING
  }

  return {
    top: checkVerticalPosition(),
    left: checkHorizonPosition(),
  }
}
