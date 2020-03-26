import decamelize from "decamelize"
import pkg2 from "pkg2"

export default () => {
  pkg2("pkg1CallingPkg2")
  console.log(decamelize("pkg1"))
}
