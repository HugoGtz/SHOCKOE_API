let functionHandler = () => {
    return (target, key, descriptor) => {
        try {
            const fn = descriptor.value
            descriptor.value = (...args) => {
                target.req = args[0]
                target.res = args[1]
                return fn.apply(target, args)
            }
            return descriptor
        } catch (err) {
            return target.res_fail(String(err))
        }
    }
}
export default functionHandler