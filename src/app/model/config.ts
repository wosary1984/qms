
const SysConfig = Object.freeze( {

    host: 'http://localhost:8080',
    //host:'http://feng.ap-northeast-2.elasticbeanstalk.com/',
    //appname: 'feng.sport',
    appname: 'QMS',
    headers: new Headers( { 'Content-Type': 'application/json' } ),
    pageSize: 10,
    pageHeight: 142,
} );
export default SysConfig;

