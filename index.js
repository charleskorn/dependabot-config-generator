#!/usr/bin/env node

const arg = require('arg');
const cloneDeep = require('clone-deep');
const fs = require('fs');
const glob = require("glob");
const path = require("path");
const YAML = require('yaml');

const patterns = require('./patterns');
const ignores = require('./ignores');

const ignore = '--ignore';
const labels = '--label';

const args = arg({
    [ignore]: [String],
    [labels]: [String]
});

if (args[ignore] !== undefined) {
    args[ignore].forEach(entry => ignores.push(entry));
}

const labelsConfig = args[labels] === undefined ? {} : {labels: args[labels]};

const configs = [];

Object.keys(patterns).forEach(pattern => {
    const patternConfig = patterns[pattern];
    const matches = glob.sync(`**/${pattern}`, {
        dot: true,
        ignore: ignores
    });

    matches.forEach(match => {
        const directory = path.dirname(match);

        const config = {
            ...cloneDeep(patternConfig),
            ...cloneDeep(labelsConfig),
            directory: directory === '.' ? '/' : directory,
            'open-pull-requests-limit': 10,
        };

        configs.push(config);
    });
});

const doc = new YAML.Document();
const arguments = process.argv.slice(2).join(' ');
doc.commentBefore = (' Generated with https://github.com/charleskorn/dependabot-config-generator\n Re-generate this file with: npx github:charleskorn/dependabot-config-generator ' + arguments).trimEnd();
doc.contents = {version: 2, updates: configs};

const directory = '.github';

if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
}

const filePath = path.join(directory, 'dependabot.yml');

fs.writeFileSync(filePath, doc.toString());
