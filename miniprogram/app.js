import { setupModal, setupToast } from './utils/extendApi'

App({
  onLaunch() {
    setupToast()
    setupModal()
  },
  globalData: {},
})
