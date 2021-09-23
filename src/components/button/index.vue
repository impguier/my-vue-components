<template>
    <button class='eb-button' @click="handleClick" :class='[`eb-button--${type}`,
            {"is-plain":isPlain},
            {"is-circle":isCircle},
            {"is-round":round},
        ]'
    >
        <eb-icon v-if='icon' :icon="icon"></eb-icon>
        <span v-if="$slots.default"><slot></slot></span>        
    </button>
</template>

<script>
    import ebIcon from 'src/components/icon'
    export default {
        name: 'eb-button',
        components:{
            ebIcon
        },
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