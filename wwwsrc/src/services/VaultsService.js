import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

class VaultsService {
  // get requests
  async getUserProfileVaults(profileId) {
    try {
      const res = await api.get('profile/' + profileId + '/vaults/')
      AppState.vaults = res.data
    } catch (error) {
      logger.log(error)
    }
  }

  async getUserVaults(profileId) {
    try {
      const res = await api.get('profile/' + profileId + '/vaults/')
      AppState.userVaults = res.data
    } catch (error) {
      logger.log(error)
    }
  }

  async getActiveVault(vaultId) {
    try {
      const res = await api.get('api/vaults/' + vaultId)
      AppState.activeVault = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  // post, delete, and put requests

  async addVault(newVault, profileId) {
    try {
      await api.post('api/vaults', newVault)
      this.getUserProfileVaults(profileId)
    } catch (error) {
      logger.log(error)
    }
  }

  async deleteVault(vaultId, profileId) {
    try {
      await api.delete('api/vaults/' + vaultId)
      this.getUserProfileVaults(profileId)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const vaultsService = new VaultsService()
