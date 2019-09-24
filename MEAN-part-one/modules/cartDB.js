const mariadb = require('mariadb');
const pool = mariadb.createPool({
  user: 'root',
  password: 'root',
  database: 'colleague'
})


module.exports = class CartDB {
  constructor() {
    pool.getConnection().then(conn => this.conn = conn);
  }


  async readCartForUser(user) {

    let sql = `
      
    SELECT * FROM carts
  
    WHERE userId = 2
      `;
    let result = await this.conn.query(sql);
    return result;


  }

  async getPrice() {
    let sql = `
    SELECT SUM(products.price*carts.quantity) as amount 
    FROM products JOIN carts ON carts.productId = products.id
    WHERE userId = 2

    `;
    let result = await this.conn.query(sql);
    return result;
  }

  // async checklogin(req) {
  //   if (!req.cookies.uuid) {
  //     return false;
  //   }

  //   let sql = `
  //   SELECT * FROM colleagues  WHERE token = '${req.cookies.uuid}'
  //   `;
  //   let result = await this.conn.query(sql);
  //   return result[0];
  // a query mindig tömböt ad vissza
  // azért [0], mert az maga a user az adataival
  //}



  async createItem(productId) {

    let sql =
      `
      INSERT INTO carts (productId, userId, quantity)
      VALUES (${productId}, 12, 1)
  `;

    let result = await this.conn.query(sql);
    return result;
  }

  // async updateCart(item, id) {
  //   let sql =
  //     `
  //     UPDATE carts
  //     SET 
  //         productId = ${item.productId}, 
  //         userId = ${item.userId}, 
  //         quantity= ${item.quantity} 

  //     WHERE id = ${id}
  //     `;
  //   let result = await this.conn.query(sql);
  //   return result;
  // }




  
  async deleteItem(productId) {
    const sql = `
      DELETE FROM carts
      WHERE productId=${productId} AND userId=12
      `
    let result = await this.conn.query(sql);
    return result;
  }
};
