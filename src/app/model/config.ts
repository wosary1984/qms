
const RemoteServiceConfig = Object.freeze( {

    host: 'http://localhost:18080',
    //host:'http://feng.ap-northeast-2.elasticbeanstalk.com/',
    contextpath: '/qms-server',
    headers: new Headers( { 'Content-Type': 'application/json' } ),
    pageSize: 10,
    pageHeight: 142
} );
export default RemoteServiceConfig;

