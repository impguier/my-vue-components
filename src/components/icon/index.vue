<template>
    <i class='eb-icon' :class="[`eb-icon-${icon}`]"></i>
</template>

<script>
    export default {
        name: 'ebIcon',
        props:{
            icon:{
                type:String,
                default: ''
            }
        }
    }
</script>

<style lang="less">
@import './index.less';
</style>