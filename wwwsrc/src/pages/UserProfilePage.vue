<template>
  <div class="userprofile container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>{{ userProfile.name }}</h1>
        <img :src="userProfile.picture" alt="profile img">
        <h4>Total Vaults: {{ vaults.length }}</h4>
        <h4>Total Keeps: {{ keeps.length }}</h4>
      </div>
      <div v-if="route.params.id != profile.id" class="col-12">
        <h3>Vaults</h3>
      </div>
      <div v-if="route.params.id == profile.id" class="col-12">
        <h3>
          Vaults <i class="far fa-plus-square pointer" data-toggle="modal" data-target="#vaultModal"></i>
          <div class="modal fade"
               id="vaultModal"
               tabindex="-1"
               role="dialog"
               aria-labelledby="exampleModalLabel"
               aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Add a Vault
                  </h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="addVault(state.newVault, profile.id)" class="form-group">
                    <div class="form-group">
                      <input type="text"
                             class="form-control"
                             aria-describedby="helpId"
                             placeholder="Name"
                             v-model="state.newVault.name"
                      >
                    </div>
                    <div class="form-group">
                      <input type="text"
                             class="form-control"
                             aria-describedby="helpId"
                             placeholder="Description"
                             v-model="state.newVault.description"
                      >
                    </div>
                    <div class="form-check">
                      <label for="isPrivate">Private?</label>
                      <input type="checkbox"
                             class="form-check-label"
                             id="isPrivate"
                             aria-describedby="helpId"
                             placeholder=""
                             v-model="state.newVault.isPrivate"
                      >
                    </div>
                    <button type="submit" class="btn btn-success">
                      Create
                    </button>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </h3>
      </div>
      <userprofile-vault-component v-for="vault in vaults" :key="vault.id" :vault-prop="vault" />
    </div>
    <div class="row">
      <div v-if="route.params.id != profile.id" class="col-12">
        <h3>Keeps</h3>
      </div>
      <div v-if="route.params.id == profile.id" class="col-12">
        <h3>
          Keeps <i class="far fa-plus-square pointer" data-toggle="modal" data-target="#keepModal"></i>
          <div class="modal fade"
               id="keepModal"
               tabindex="-1"
               role="dialog"
               aria-labelledby="exampleModalLabel"
               aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Add a Keep
                  </h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="addKeep(state.newKeep)" class="form-group">
                    <div class="form-group">
                      <input type="text"
                             class="form-control"
                             aria-describedby="helpId"
                             placeholder="Name"
                             v-model="state.newKeep.name"
                      >
                    </div>
                    <div class="form-group">
                      <input type="text"
                             class="form-control"
                             aria-describedby="helpId"
                             placeholder="Description"
                             v-model="state.newKeep.description"
                      >
                    </div>
                    <div class="form-group">
                      <input type="text"
                             class="form-control"
                             aria-describedby="helpId"
                             placeholder="Image URL"
                             v-model="state.newKeep.img"
                      >
                    </div>
                    <button type="submit" class="btn btn-success">
                      Create
                    </button>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </h3>
      </div>
      <home-keep-component v-for="keep in keeps" :key="keep.id" :keep-prop="keep" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { vaultsService } from '../services/VaultsService'
import { AppState } from '../AppState'
import { keepsService } from '../services/KeepsService'
import { profileService } from '../services/ProfileService'
export default {
  name: 'UserProfile',
  setup() {
    const route = useRoute()
    onMounted(() => {
      vaultsService.getUserProfileVaults(route.params.id)
      vaultsService.getUserVaults(AppState.profile.id)
      keepsService.getUserProfileKeeps(route.params.id)
      profileService.getUserProfile(route.params.id)
    })
    const state = reactive({
      newKeep: {
        name: '',
        description: '',
        img: ''
      },
      newVault: {
        name: '',
        description: '',
        isPrivate: false
      }
    })
    return {
      state,
      route,
      vaults: computed(() => AppState.vaults),
      keeps: computed(() => AppState.keeps),
      profile: computed(() => AppState.profile),
      userProfile: computed(() => AppState.userProfile),
      addKeep(newKeep) {
        keepsService.addKeep(newKeep)
      },
      addVault(newVault, profileId) {
        vaultsService.addVault(newVault, profileId)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
