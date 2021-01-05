<template>
  <div class="profile-keep-component col-3">
    <div class="image-box pointer">
      <img class="img-fluid max-height" :src="keep.img" alt="keep img" style="width: 100%;">
      <h3 class="bottom-left">
        {{ keep.name }}
      </h3>
      <button @click.stop="deleteKeep(keep.id)" class="btn btn-danger bottom-right">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { keepsService } from '../services/KeepsService'
export default {
  name: 'ProfileKeepComponent',
  props: {
    keepProp: Object
  },
  setup(props) {
    return {
      keep: computed(() => props.keepProp),
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
