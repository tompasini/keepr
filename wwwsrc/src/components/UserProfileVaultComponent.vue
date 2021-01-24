<template>
  <div @click.stop="goToActiveVault(vault.id)" class="userprofile-vault-component col-3 border rounded shadow-lg pointer vault-bg m-2">
    <h3>{{ vault.name }}</h3>
    <p>{{ vault.description }}</p>
    <button v-if="vault.creatorId == profile.id" @click.stop="deleteVault(vault.id, profile.id)" class="btn btn-danger">
      Delete
    </button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { vaultsService } from '../services/VaultsService'
import { AppState } from '../AppState'
import { useRouter } from 'vue-router'
export default {
  name: 'UserprofileVaultComponent',
  props: {
    vaultProp: Object
  },
  setup(props) {
    const router = useRouter()
    return {
      profile: computed(() => AppState.profile),
      vault: computed(() => props.vaultProp),
      deleteVault(vaultId, profileId) {
        vaultsService.deleteVault(vaultId, profileId)
      },
      goToActiveVault(vaultId) {
        router.push({ name: 'ActiveVault', params: { id: vaultId } })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

.max-height{
  max-height: 500px;
}

.pointer{
  cursor: pointer;
}

</style>
