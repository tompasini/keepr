import { api } from './AxiosService'
// import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
import Swal from 'sweetalert2'

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
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then(async(result) => {
      if (result.isConfirmed) {
        try {
          await api.delete('api/vaultkeeps/' + vaultKeepId)
          this.getKeepsByVault(vaultId)
        } catch (error) {
          logger.error(error)
        }
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'This keep has been removed from the vault',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'The keep is still in the vault',
          'error'
        )
      }
    })
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
