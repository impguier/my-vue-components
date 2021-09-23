<template>
    <ul class='eb-accordion'>
        <slot></slot>
    </ul>
</template>

<script>

    export default {
        name:"ebAccordion",
        model:{
            prop:'activeName',
            event: 'change'
        },
        prop:{
            value:{
                type:[String, Number, Array],
                defalut: []
            }
        },
        data () {
            return {
                activeNames: [].concat(this.value)
            }
        },
        provide () {
            return {
                collapse: this
            }
        },
        methods: {
            setActiveName(activeNames) {
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>