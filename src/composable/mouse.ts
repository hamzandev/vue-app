/* simple composable example for tracking mouse location (x and y) */

import { ref } from 'vue'
import { useEventListener } from './event'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  useEventListener(window, 'mousemove', (event: any) => {
    x.value = event.pageX
    y.value = event.pageY
  })

  return { x, y }
}