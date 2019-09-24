const mariadb = require('mariadb');
const pool = mariadb.createPool({
  user: 'root',
  password: 'root',
  database: 'colleague'
})


module.exports = class ProductDB {
  constructor() {
    pool.getConnection().then(conn => this.conn = conn);
  }


  async readProduct() {
    let sql = `
    SELECT * FROM products
    `
    let result = await this.conn.query(sql);
    return result;
  }

  async readOneProduct(id) {
    let sql = `
  SELECT * FROM products
  WHERE id = ${id}
  `;
    let result = await this.conn.query(sql);
    return result;
  }

  async createProduct(product) {
    let sql =
      `
      INSERT INTO products (productname, price, stock)
      VALUES ('${product.productname}', 
      ${product.price}, 
      ${product.stock})
  `;

    let result = await this.conn.query(sql);
    return result;
  }
  async updateProduct(product) {
    let sql =
      `
    UPDATE products 
    SET 
        productname = '${product.productname}',
        price = ${product.price},
        stock = ${product.stock}
      
        
    WHERE id = ${product.id}
    `;
    let result = await this.conn.query(sql);
    return result;
  }

  async deleteProduct(id) {
    const sql = `
    DELETE FROM products
    WHERE id=${id}
    `
    let result = await this.conn.query(sql);
    return result;
  }
};
