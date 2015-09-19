var component = require(`${process.cwd()}/${process.argv[2]}`)

Object.keys(component.propTypes).map(prop =>{
  var type = component.propTypes[prop]
  console.log(prop,type.name)
})
