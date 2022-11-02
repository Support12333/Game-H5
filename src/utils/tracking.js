import { GetBehaviour } from '@api/home.js'

export default (txt) => {
  GetBehaviour({
    source: txt
  })
}
