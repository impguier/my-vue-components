export default {
    methods: {
        dispatch(componentName, eventName, params) {
            let name = this.$parent.$options.name
            let parent = this.$parent
            while (parent && (!name || name !== componentName)) {
                name = parent.$parent.$options.componentName
                parent = parent.$parent
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params))
            }

        }
    }
}