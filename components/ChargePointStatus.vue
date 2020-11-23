<template>
  <span>
    <span>{{ chargePointStatus.chargePointName }}</span>
    <span :class="{ 'avail': chargePointStatus.status === 'AVAILABLE'}" class="charge-status">{{ chargePointStatus.status }}</span>
    <span v-if="chargePointStatus.chargeSpeed">{{ chargePointStatus.chargeSpeed }}</span>
    <el-button size="mini" class="charge-btn" plain :loading="loading" @click="toggleCharging(chargePointStatus)">
      <span v-if="chargePointStatus.status === 'AVAILABLE'">plug in</span>
      <span v-else>unplug</span>
    </el-button>
  </span>
</template>

<script>
export default {
  name: 'ChargePointStatus',

  props: {
    chargePointStatus: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      loading: false
    }
  },

  methods: {
    async toggleCharging (chargePoint) {
      this.loading = true
      if (chargePoint.status === 'AVAILABLE') {
        const { data } = await this.$axios.post('charge-connections', null, { params: { chargePointName: chargePoint.chargePointName } })
        this.$emit('update:chargePointStatus', data)
        this.$emit('update-all', data)
      } else {
        const { data } = await this.$axios.delete('charge-connections', { params: { chargePointName: chargePoint.chargePointName } })
        this.$emit('update:chargePointStatus', data)
        this.$emit('update-all', data)
      }
      this.loading = false
    }
  }
}
</script>

<style>
.charge-status {
    color: #c46c31;
    font-weight: 500;
}
.charge-status.avail {
    color: #509977;
}
</style>
