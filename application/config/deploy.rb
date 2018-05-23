lock "~> 3.10.2"

set :application, "rails_app"
set :repo_url, "git@github.com:shiromegane/RailsDocker.git"
set :branch, ENV.fetch('BRANCH', 'master')
set :deploy_to, "/var/www/rails_app"

set :user, :ubuntu
set :rbenv_type, fetch(:user)
set :rbenv_ruby, '2.5.1'
set :rbenv_roles, :all

set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml"

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure
