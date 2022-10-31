import { EventTracking } from '@api/config'

export default (txt) => {
  EventTracking({
    location: txt
  })
}
