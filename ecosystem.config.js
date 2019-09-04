module.exports = {
  apps : [{
    name: 'API',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '172.18.6.241',
      ref  : 'origin/master',
      repo : 'git@github.com:johnho-han/hello_world.git',
      path : '/home/platform/workspace/hanzhenhao/hello_world',
      ssh_options:"StrictHostKeyChecking=no",
'post-deploy' : '/root/.pm2/modules/pm2-logrotate/node_modules/.bin/pm2 reload ecosystem.config.js --env production',
      env:{
              "NODE_ENV":"production"
          }

    }
  }
};
