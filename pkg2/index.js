import decamelize from "decamelize"

export default (a) => {
  a = a || "pkg2"
  console.log(decamelize(a))
}
