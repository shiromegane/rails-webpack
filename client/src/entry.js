import Steps from 'VueSFC/Steps'
import Steps2 from 'VueSFC/Steps2'
import VueMounter from 'Modules/VueMounter'
const mounter = new VueMounter()

document.addEventListener('DOMContentLoaded', async () => {
  await mounter.add(Steps)
  await mounter.add(Steps2)
  console.log(mounter.mount())
  // await VueMounter([{ component: Steps }])
  //   .then(() => {})
  //   .catch(() => {})
})
