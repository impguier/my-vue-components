<template>
    <ul class='eb-accordion'>
        <slot></slot>
    </ul>
</template>

<script>

    export default {
        name:"ebCollapse",
        componentName: 'ebCollapse',
        model:{
            prop:'value',
            event: 'change'
        },
        props:{
            value:{
                type:[String, Number, Array],
                defalut() {
                    return []
                }
            },
            accordion:{
                type: Boolean,
                default: false
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
            setActiveName(names) {
                let value = this.accordion ? names[0] : names
                if(this.accordion) {
                    this.activeNames = names
                }
                names = names.slice()
                this.activeNames = names
                
                this.$emit('input', value)
                // v-model
                this.$emit('input', value)                
            },
            handleItemClick (item) {
                let name = item.name
                if(this.accordion) {
                    this.setActiveName( [(name || name === 0) && this.activeNames[0] === name ?'':name])
                } else { 
                    let activeNames = this.activeNames.slice()                   
                    if(activeNames.indexOf(name) > -1) {
                        activeNames.splice(activeNames.indexOf(name), 1)
                    } else {
                        activeNames.push(name)
                    }                    
                    this.setActiveName(activeNames)
                }                
            }
        },
        created() {
            this.$on("item-click", this.handleItemClick)
        }
    }
</script>

<style lang="scss" scoped>

</style>