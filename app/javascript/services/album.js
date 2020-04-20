import Api from './api'

const AlbumService = {
  show: (id) => Api.get(`/albums/${id}`)
}

export default AlbumService