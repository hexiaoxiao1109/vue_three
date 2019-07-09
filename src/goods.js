//1.引入模块
var mysql  = require('mysql');
const http = require('http');//创建服务器
const url = require('url');//获取数据
//2.配置
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 's1z2y3hh',
  database : 'vueshop'
});
connection.connect();
//3. 创建web服务器
const server = http.createServer(async (req, res) => {

  //接受参数
  let getData = url.parse(req.url, true)
  let title = getData.query.title ? getData.query.title : ''
  let pageno = getData.query.pageno
  // if (!title) return res.end(response(400, '参数有无', []))
  if (!pageno) return res.end(response(400, '参数有无', []))

  //设置响应编码
  res.setHeader('content-type', 'text/html;charset=utf-8')
  res.setHeader('Access-Control-Allow-Origin', '*')
  //判断路由
  // if (req.url == '/goodsList') {
  if (req.url.indexOf('/goodsList') != -1) {
    let sql = `select * from goods `
    if (title) sql += ` where title like "%${title}%"`
    if (pageno) {
      let pagesize = 2
      let start = (pageno - 1) * pagesize
      sql += `limit ${start},${pagesize}`
    }
    let goodsList = await query(sql)
    res.end(response(200, '获取数据成功', goodsList))
  }  else {
    return res.end('this is 404')
  }
  
}).listen(8000);

const query = function( sql ) {
  // 返回一个 Promise
  return new Promise(( resolve, reject ) => {
    connection.query(sql, ( err, rows) => {
      if ( err ) {
        reject( err )
      } else {
        resolve( rows )
      }
    })
  })
}

//响应json数据
function response(state, msg, data) {
  return JSON.stringify({
    meta: {
      state: state,
      msg: msg
    },
    data: data
  })
}