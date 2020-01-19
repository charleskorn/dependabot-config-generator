#!/usr/bin/env node

const arg = require('arg');
const glob = require("glob");
const path = require("path");
const YAML = require('yaml');

const patterns = require('./patterns');
const ignores = require('./ignores');
const automergeConfig = require('./automergeConfig');

const enableAutoMerge = '--enable-auto-merge';
const ignore = '--ignore';

const args = arg({
    [enableAutoMerge]: Boolean,
    [ignore]: [String]
});

const automerge = automergeConfig(args[enableAutoMerge]);

if (args[ignore] !== undefined) {
    args[ignore].forEach(entry => ignores.push(entry));
}

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
            ...patternConfig,
            directory: directory === '.' ? '/' : directory,
            ...automerge
        };

        configs.push(config);
    });
});

const doc = new YAML.Document();
doc.commentBefore = ' Generated with https://github.com/charleskorn/dependabot-config-generator';
doc.contents = {version: 1, update_configs: configs};

console.info(doc.toString());