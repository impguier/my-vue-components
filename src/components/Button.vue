<template>
    <button class='el-button' @click="handleClick" :class='[`el-button--${type}`,
            {"is-plain":isPlain},
            {"is-circle":isCircle},
            {"is-round":round},
        ]'
    >
        <i v-if='icon' class="el-icon" :class='[`el-icon-${icon}`]'></i>
        <span v-if="$slots.default"><slot></slot></span>
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
    
</style>