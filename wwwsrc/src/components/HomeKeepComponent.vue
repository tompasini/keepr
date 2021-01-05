<template>
  <div class="home-keep-component col-3">
    <div @click="getActiveKeep(keep.id)" class="image-box pointer" data-toggle="modal" :data-target="'#keepModal' + keep.id">
      <img class="img-fluid max-height" :src="keep.img" alt="keep img" style="width: 100%;">
      <h3 class="bottom-left">
        {{ keep.name }}
      </h3>
      <img @click.stop="goToUserProfile(keep.creator.id)" class="img-fluid bottom-right avatar" :src="keep.creator.picture" alt="keep img">
    </div>
    <div class="modal fade"
         :id="'keepModal' + keep.id"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5>
              views: {{ activeKeep.views }}
            </h5>
            <span>||</span>
            <h5>
              keeps: {{ activeKeep.keeps }}
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img class="img-fluid" :src="keep.img" alt="">
            <p>{{ keep.description }}</p>
          </div>
          <div class="modal-footer">
            <img class="img-fluid avatar" :src="keep.creator.picture" alt="keep img">
            <h5>{{ keep.creator.name }}</h5>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button v-if="profile.id == keep.creatorId" @click.stop="deleteKeep(keep.id)" class="btn btn-danger">
              Delete
            </button>
            <div v-if="profile.id" class="dropdown">
              <button class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenu2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
              >
                Add to Vault
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button v-for="vault in vaults" :key="vault.id" class="dropdown-item" type="button" @click.stop="addKeepToVault(vault.id, keep.id)">
                  {{ vault.name }}
                </button>
              </div>
              <button v-if="keep.vaultKeepId && vault.creatorId == profile.id" @click.stop="removeKeepFromVault(keep.vaultKeepId, vault.id, profile.id)" class="btn btn-danger">
                Remove from Vault
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { AppState } from '../AppState'
import { vaultKeepsService } from '../services/VaultKeepsService'
import { keepsService } from '../services/KeepsService'
export default {
  name: 'HomeKeepComponent',
  props: {
    keepProp: Object
  },
  setup(props) {
    const router = useRouter()
    return {
      keep: computed(() => props.keepProp),
      profile: computed(() => AppState.profile),
      vaults: computed(() => AppState.userVaults),
      vault: computed(() => AppState.activeVault),
      activeKeep: computed(() => AppState.activeKeep),
      goToUserProfile(profileId) {
        router.push({ name: 'UserProfile', params: { id: profileId } })
      },
      addKeepToVault(vaultId, keepId) {
        vaultKeepsService.addKeepToVault(vaultId, keepId)
      },
      deleteKeep(keepId) {
        keepsService.deleteKeep(keepId)
      },
      removeKeepFromVault(vaultKeepId, vaultId, profileId) {
        vaultKeepsService.removeKeepFromVault(vaultKeepId, vaultId)
        router.push({ name: 'UserProfile', params: { id: profileId } })
      },
      getActiveKeep(keepId) {
        keepsService.getActiveKeep(keepId)
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
