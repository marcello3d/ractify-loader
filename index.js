
module.exports = function(source) {
    var toSource = require('tosource')

    var rcu = require('rcu')

    rcu.init(require('ractive'))

    this.cacheable()

    var component = rcu.parse(source)

    var script
    if (component.script) {
        script = [
            'var component = module',
            component.script
        ]
        if (component.template) {
            script.push('component.exports.template = '+toSource(component.template))
        }
        if (component.css) {
            script.push('component.exports.css = '+toSource(component.css))
        }
    } else {
        script = []
        script.push('exports.template = '+toSource(component.template))
        if (component.css) {
            script.push('exports.css = '+toSource(component.css))
        }
    }
    return script.join('\n\n')
};