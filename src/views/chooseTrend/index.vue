<script setup lang="ts">

</script>

<template>
  <div>
    <div class="Trend">
      <chooseTrend text="营业额" style="margin-right: 10px" upIcon="ChatDotRound"/>
      <chooseTrend text="销售额" trendType="down"/>
    </div>

    <div class="Trend">
      <chooseTrend style="margin-right: 10px" reverseColor>
        营业额
      </chooseTrend>
      <chooseTrend trendType="down" reverseColor>
        销售额
      </chooseTrend>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Trend {
  display: flex;

}
</style>
