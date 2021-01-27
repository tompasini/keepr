<template>
  <div class="container-fluid home p-0">
    <div class="card-columns">
      <home-keep-component v-for="keep in keeps" :key="keep.id" :keep-prop="keep" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { keepsService } from '../services/KeepsService'
import HomeKeepComponent from '../components/HomeKeepComponent.vue'
import { AppState } from '../AppState'
export default {
  components: { HomeKeepComponent },
  name: 'Home',
  setup() {
    onMounted(async() => {
      await keepsService.getAllKeeps()
    })
    return {
      keeps: computed(() => AppState.keeps)
    }
  }
}

</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
