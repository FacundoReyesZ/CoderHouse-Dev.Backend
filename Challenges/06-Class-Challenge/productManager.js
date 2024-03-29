const fs = require("fs")
const fsp = fs.promises

class ProductManager {
  constructor(path) {
    this.path = path ?? "./db.json"
    this.initialDBSetting = { nextId: 1, data: [] }
  }
  eval(type, value, db) {
    if (!value) throw `Ingrese un valor: ${type}`
    switch (type) {
      case "title":
        if (value.length < 3) throw "Error al agregar el titulo al producto"
        break
      case "description":
        if (value.length < 5) throw "Error al agregar la descripcion al producto"
        break
      case "price":
        if (value < 1) throw "Error al agregar el precio al producto"
        break
      case "thumbnail":
        if (value.length < 1) throw "Error al agregar las rutas de las imagenes del producto"
        break
      case "code":
        if (value.length !== 12 || db.filter(prod => prod.code == value).length > 0) throw "Error al agregar el codigo al producto"
        break
      case "stock":
        if (value < 1) throw "Error al agregar la cantidad disponible del producto"
        break
      default:
        throw `No se encontro el tipo ${type} para evaluar`
    }
    return value
  }
  async checkDB() {
    if (!fs.existsSync(this.path)) await fsp.writeFile(this.path, JSON.stringify(this.initialDBSetting))
  }
  async addProduct({ title, description, price, thumbnail, code, stock }) {
    await this.checkDB()
    const dbInfo = JSON.parse(await fsp.readFile(this.path, "utf-8"))
    const productInfo = {
      id: dbInfo.nextId++,
      title: this.eval("title", title),
      description: this.eval("description", description),
      price: this.eval("price", price),
      thumbnail: this.eval("thumbnail", thumbnail),
      code: this.eval("code", code, dbInfo.data),
      stock: this.eval("stock", stock),
    }
    dbInfo.data.push(productInfo)
    await fsp.writeFile(this.path, JSON.stringify(dbInfo))
  }
  async getProducts() {
    this.checkDB()
    const dbInfo = JSON.parse(await fsp.readFile(this.path, "utf-8"))
    return dbInfo.data
  }
  async getProductById(prodID) {
    this.checkDB()
    const dbInfo = JSON.parse(await fsp.readFile(this.path, "utf-8"))
    const prodInfo = dbInfo.data.find(product => product.id == prodID)
    return prodInfo ?? {}
  }
  async updateProduct(prodID, newInfo) {
    this.checkDB()
    const dbInfo = JSON.parse(await fsp.readFile(this.path, "utf-8"))
    let prodInfo = dbInfo.data.find(product => product.id == prodID)
    prodInfo.title = newInfo.title ? this.eval("title", newInfo.title) : prodInfo.title
    prodInfo.description = newInfo.description ? this.eval("description", newInfo.description) : prodInfo.description
    prodInfo.price = newInfo.price ? this.eval("price", newInfo.price) : prodInfo.price
    prodInfo.thumbnail = newInfo.thumbnail ? this.eval("thumbnail", newInfo.thumbnail) : prodInfo.thumbnail
    prodInfo.code = newInfo.code ? this.eval("code", newInfo.code, dbInfo.data) : prodInfo.code
    prodInfo.stock = newInfo.stock ? this.eval("stock", newInfo.stock) : prodInfo.stock
    await fsp.writeFile(this.path, JSON.stringify(dbInfo))
  }
  async deleteProduct(prodID) {
    this.checkDB()
    const dbInfo = JSON.parse(await fsp.readFile(this.path, "utf-8"))
    dbInfo.data = dbInfo.data.filter(product => product.id !== prodID)
    await fsp.writeFile(this.path, JSON.stringify(dbInfo))
  }
}

// TEST THE CODE
const prodMng = new ProductManager

// USEFUL TEMPLATE FOR PRODUCTS
const template = [
  { title: "Samsung Galaxy S23 Ultra", description: "Telefono Inteligente de gama alta", price: 1150, thumbnail: ["https://imageurl.com/"], code: "smq1t89upogm", stock: 50 },
  { title: "Samsung Galaxy A70", description: "Telefono Inteligente de gama media", price: 600, thumbnail: ["https://imageurl.com/"], code: "1aw1q68fqwr9", stock: 45 },
  { title: "iPhone 14 Pro Max", description: "Telefono Inteligente de gama alta", price: 1100, thumbnail: ["https://imageurl.com/"], code: "q5er8hy9il7r", stock: 30 }
]

// CODE'S EXECUTION
const app = async () => {
  try {
    // await prodMng.addProduct(template[0])
    // const prodsInfo = await prodMng.getProducts()
    // const prodInfo = await prodMng.getProductById(6)
    // await prodMng.updateProduct(6, { title: "Samsung S9" })
    // await prodMng.deleteProduct(2)

    console.log("Ejecucion terminada satisfactoriamente!");
  } catch (error) {
    console.log(error);
  }
}

app()