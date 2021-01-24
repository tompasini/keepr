import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Swal from 'sweetalert2'

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
          await api.delete('api/vaults/' + vaultId)
          this.getUserProfileVaults(profileId)
        } catch (error) {
          logger.error(error)
        }
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'The vault has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'The vault has not been deleted',
          'error'
        )
      }
    })
  }
}

export const vaultsService = new VaultsService()
