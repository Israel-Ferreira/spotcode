import Api from './api'

const DiscoveryService = {
  index: async () => await Api.get("/dashboard")
}

export default DiscoveryService
