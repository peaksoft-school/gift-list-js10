export const providerEvent = (something) => {
   window.dispatchEvent(new CustomEvent('providerEvent', { detail: something }))
}
