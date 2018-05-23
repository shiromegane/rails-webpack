# server-based syntax
# ======================
# Defines a single server with a list of roles and multiple properties.
# You can define all roles on a single server, or split them:

server '27.133.155.173', user: 'ubuntu', roles: %w{app db web}
server '27.133.155.173', user: 'ubuntu', roles: %w{app web}
server '27.133.155.173', user: 'ubuntu', roles: %w{db}

# role :app, %w{27.133.155.173}
# role :web, %w{27.133.155.173}
# role :db,  %w{27.133.155.173}

server '27.133.155.173',
user: 'ubuntu',
roles: %w{web app},
ssh_options: {
  user: 'ubuntu',
  keys: %w(~/.ssh/id_rsa),
  forward_agent: false,
  auth_methods: %w(publickey)
}
