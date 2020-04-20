import Api from './api'

const DiscoveryService = {
  index: () => Api.get("/dashboard")
}

export default DiscoveryService
