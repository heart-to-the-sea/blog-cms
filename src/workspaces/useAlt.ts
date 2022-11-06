function handleAltKey (e:KeyboardEvent) {
  if(e.altKey) {
    console.log('false')
  }
}
export default function useAlt(){
  window.addEventListener('keydown',handleAltKey, false)
}