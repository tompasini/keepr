import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Swal from 'sweetalert2'

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
          await api.delete('api/keeps/' + keepId)
          const keepIndex = AppState.keeps.findIndex(k => k.id === keepId)
          AppState.keeps.splice(keepIndex, 1)
        } catch (error) {
          logger.log(error)
        }
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your keep has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your keep is safe :)',
          'error'
        )
      }
    })
  }
}

export const keepsService = new KeepsService()
