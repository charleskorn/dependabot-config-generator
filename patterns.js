module.exports = {
    'package.json': {
        package_manager: 'javascript',
        update_schedule: 'live',
    },
    'Dockerfile': {
        package_manager: 'docker',
        update_schedule: 'daily',
    },
    'Gemfile': {
        package_manager: 'ruby:bundler',
        update_schedule: 'live',
        allowed_updates: [
            {
                match: {
                    update_type: 'all'
                }
            }
        ]
    },
    'build.gradle': {
        package_manager: 'java:gradle',
        update_schedule: 'daily',
    },
    'go.mod': {
        package_manager: 'go:modules',
        update_schedule: 'daily',
    },
};