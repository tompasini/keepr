import { api } from './AxiosService'
// import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'

class VaultKeepsService {
  async addKeepToVault(vId, kId) {
    try {
      const newVaultKeep = {
        keepId: kId,
        vaultId: vId
      }
      await api.post('api/vaultkeeps', newVaultKeep)
      const keepIndex = AppState.keeps.findIndex(k => k.id === kId)
      const updatedKeepsKeep = AppState.keeps[keepIndex]
      updatedKeepsKeep.keeps++
      updatedKeepsKeep.views = AppState.activeKeep.views
      AppState.activeKeep = updatedKeepsKeep
    } catch (error) {
      logger.log(error)
    }
  }

  async removeKeepFromVault(vaultKeepId, vaultId) {
    try {
      await api.delete('api/vaultkeeps/' + vaultKeepId)
      this.getKeepsByVault(vaultId)
    } catch (error) {
      logger.error(error)
    }
  }

  async getKeepsByVault(vaultId) {
    try {
      const res = await api.get('api/vaults/' + vaultId + '/keeps')
      AppState.keeps = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const vaultKeepsService = new VaultKeepsService()
