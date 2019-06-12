
const ActionPath = Object.freeze( {
    sidebar: {
        menu: 'my/privileges'
    },
    admin: {
        users: 'api/sys/users',
        user: 'api/sys/user',
        roles: 'api/sys/roles',
        role: 'api/sys/role',
        functions: 'api/sys/privileges'
    },
    cookie: {
        jobs: 'api/cookie/jobs',
        resumejob: '/api/cookie/resumejob',
        addjob: '/api/cookie/addjob',
        pausejob: '/api/cookie/pausejob',
        deletejob: '/api/cookie/deletejob'
    },
    org: {
        get_all_company: 'api/org/companies',
        get_create_edit_company: 'api/org/company',
        company_logo: 'api/org/company/logo',
        department: 'api/org/department',
        employees: 'api/org/employees'
    },
    person: {
        get_create_edit_person: 'api/person',
        get_all_person: 'api/persons'
    },
    message: {
        get_all_users_except_me: 'api/msg/users',
        get_user_message: 'api/msg/messages',
        get_user_received_message:'api/msg/received/messages',
        send_message: 'api/msg/send',
        update_message: 'api/msg/update'
    }


} )
export default ActionPath;