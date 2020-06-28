module.exports = {
    'package.json': {
        'package-ecosystem': 'npm',
        schedule: { interval: 'daily' },
    },
    'Dockerfile': {
        'package-ecosystem': 'docker',
        schedule: { interval: 'daily' },
    },
    'Gemfile': {
        'package-ecosystem': 'bundler',
        schedule: { interval: 'daily' },
        allow: [
            {
                'dependency-type': 'all',
            }
        ]
    },
    'build.gradle': {
        'package-ecosystem': 'gradle',
        schedule: { interval: 'daily' },
    },
    'go.mod': {
        'package-ecosystem': 'gomod',
        schedule: { interval: 'daily' },
    },
};