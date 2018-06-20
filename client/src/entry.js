import 'materialize-css'
import VueMounter from 'Modules/VueMounter'
import MaterialButton from 'VueSFC/MaterialButton'
const mounter = new VueMounter()

document.addEventListener('DOMContentLoaded', async () => {
  mounter.add(MaterialButton)
  await mounter.mount().catch(error => {
    console.log(error)
  })
})
