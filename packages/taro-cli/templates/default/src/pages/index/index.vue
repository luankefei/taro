<template>
  <view class="<%= pageName %>">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>
