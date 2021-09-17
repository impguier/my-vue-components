<template>
    <button class='eb-button' @click="handleClick" :class='[`eb-button--${type}`,
            {"is-plain":isPlain},
            {"is-circle":isCircle},
            {"is-round":round},
        ]'
    >
        <i v-if='icon' class="el-icon" :class='[`el-icon-${icon}`]'></i>
        <span v-if="$slots.default"><slot></slot></span>
        <span v-else>提交</span>
    </button>
</template>

<script>

    export default {
        name: 'eb-button',
        props:{
            icon:{
                type: String,
                default: ''
            },
            round: {
                type: Boolean,
                default: false
            },
            type:{
                type: String,
                default: 'default'
            },
            isPlain: {
                type: Boolean,
                default: false
            },
            isCircle: {
                type: Boolean,
                default: false
            }
        },
        methods:{
            handleClick(e) {
                this.$emit('click', e)
            }
        }        
    }
</script>

<style lang="less">
@import './index.less';
</style>