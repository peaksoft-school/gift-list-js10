export const nameEvent = (name) => {
   window.dispatchEvent(new CustomEvent('name', { detail: name }))
}
