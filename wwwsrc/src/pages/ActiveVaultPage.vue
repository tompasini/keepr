<template>
  <div class="activeVault container-fluid p-0">
    <div class="row">
      <div class="col-12 ml-3">
        <h1>{{ activeVault.name }}</h1>
        <h5>Keeps: {{ keeps.length }}</h5>
      </div>
    </div>
    <div class="card-columns">
      <home-keep-component v-for="keep in keeps" :key="keep.id" :keep-prop="keep" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { vaultKeepsService } from '../services/VaultKeepsService'
import { vaultsService } from '../services/VaultsService'
import { AppState } from '../AppState'
import HomeKeepComponent from '../components/HomeKeepComponent.vue'
export default {
  name: 'ActiveVault',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      await vaultsService.getActiveVault(route.params.id)
      await vaultKeepsService.getKeepsByVault(route.params.id)
    })
    return {
      activeVault: computed(() => AppState.activeVault),
      keeps: computed(() => AppState.keeps)
    }
  },
  components: { HomeKeepComponent }
}
</script>

<style lang="scss" scoped>

</style>
