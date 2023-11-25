export const nameEvent = (name) => {
   window.dispatchEvent(new CustomEvent('name', { detail: name }))
}

export const showButtonsEvent = (showEvents) => {
   window.dispatchEvent(new CustomEvent('showButtons', { detail: showEvents }))
}
