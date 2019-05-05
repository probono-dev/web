module.exports = withFileLoader = test => extraConfig => {
    return {
        ...extraConfig,
        webpack(config, options) {
            if (extraConfig.webpack) {
                extraConfig.webpack(config, options);
            }
            config.module.rules.push({
                test,
                use: [{
                    loader: 'file-loader',
                    options: {},
                }, ],
            });
            return config;
        },
    };
};