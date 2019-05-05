module.exports = withLinaria = extraConfig => {
    return {
        ...extraConfig,
        webpack(config, options) {
            if (extraConfig.webpack) {
                extraConfig.webpack(config, options);
            }
            config.module.rules.push({
                test: /\.tsx?$/,
                use: [{
                    loader: 'linaria/loader',
                    options: {
                        sourceMap: process.env.NODE_ENV !== 'production',
                    },
                }, ],
            });
            return config;
        },
    };
};