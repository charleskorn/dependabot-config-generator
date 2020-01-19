module.exports = (enabled) => {
    if (enabled) {
        return {
            automerged_updates: [
                {
                    match: {
                        dependency_type: 'all',
                        update_type: 'all'
                    }
                }
            ]
        };
    } else {
        return {};
    }
};