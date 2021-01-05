import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

class KeepsService {
  // get methods
  async getAllKeeps() {
    try {
      const res = await api.get('api/keeps')
      AppState.keeps = res.data
    } catch (error) {
      logger.log(error)
    }
  }

  async getActiveKeep(keepId) {
    try {
      const res = await api.get('api/keeps/' + keepId)
      AppState.activeKeep = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getProfileKeeps() {
    try {
      const res = await api.get(`profile/${AppState.profile.id}/keeps`)
      AppState.keeps = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getUserProfileKeeps(profileId) {
    try {
      const res = await api.get('profile/' + profileId + '/keeps')
      AppState.keeps = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  // post delete and put methods
  async addKeep(newKeep) {
    try {
      await api.post('api/keeps', newKeep)
      this.getProfileKeeps()
    } catch (error) {
      logger.log(error)
    }
  }

  async deleteKeep(keepId) {
    try {
      await api.delete('api/keeps/' + keepId)
      this.getProfileKeeps()
    } catch (error) {
      logger.log(error)
    }
  }
}

export const keepsService = new KeepsService()
