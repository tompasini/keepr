import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfileService {
  async getProfile() {
    try {
      const res = await api.get('/profile')
      AppState.profile = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async getUserProfile(profileId) {
    try {
      const res = await api.get('/profile/' + profileId)
      AppState.userProfile = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getVaultsByProfile(profileId) {
    try {
      const res = await api.get('profile/' + profileId + '/vaults')
      AppState.vaults = res.data
    } catch (error) {
      logger.log(error)
    }
  }
}

export const profileService = new ProfileService()
