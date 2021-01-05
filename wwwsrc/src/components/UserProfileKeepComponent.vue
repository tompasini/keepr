<template>
  <div class="userprofile-keep-component col-3 border rounded shadow-lg">
    <div class="image-box">
      <img class="img-fluid max-height" :src="keep.img" alt="keep img" style="width: 100%;">
      <h3 class="bottom-left">
        {{ keep.name }}
      </h3>
      <button v-if="profile.id == keep.creatorId" @click.stop="deleteKeep(keep.id)" class="btn btn-danger bottom-right">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { keepsService } from '../services/KeepsService'
import { AppState } from '../AppState'
export default {
  name: 'UserprofileKeepComponent',
  props: {
    keepProp: Object
  },
  setup(props) {
    return {
      keep: computed(() => props.keepProp),
      profile: computed(() => AppState.profile),
      deleteKeep(keepId) {
        keepsService.deleteKeep(keepId)
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
