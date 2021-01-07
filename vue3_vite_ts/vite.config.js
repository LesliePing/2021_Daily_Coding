const path = require('path')
const { loadEnv } = require('vite')
const CWD = process.cwd()

//详细配置可参考https://github.com/vitejs/vite/blob/master/src/node/config.ts

// env
// const BASE_ENV_CONFIG = loadEnv('', CWD)
// const DEV_ENV_CONFIG = loadEnv('development', CWD)
// const PROD_ENV_CONFIG = loadEnv('production', CWD)

// console.log('vun:envs:config', {
//   BASE_ENV_CONFIG,
//   DEV_ENV_CONFIG,
//   PROD_ENV_CONFIG
// })

module.exports = mode => {
    const TARGET_ENV_CONFIG = loadEnv(mode, CWD)
    // console.log('vun:mode:config', mode, TARGET_ENV_CONFIG)

    return {
        port: 8080, // 启动端口
        open: false,
        root: path.resolve(__dirname),
        base: '',
        assetsDir: 'vue3-antd-admin/assets', // 资源文件夹
        alias: {
            '/@/': path.resolve(__dirname, 'src'),
            // [socket.io-client] lib const syntax issue
            // 'socket.io-client': 'socket.io-client/dist/socket.io.min'
        },
        proxy: {
            '/api': {
                target: 'http://us-la-cn2.sakurafrp.com:59660',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '/api/v1')
            }
        },
        plugins: [],
        cssPreprocessOptions: {
            less: {
                javascriptEnabled: true,
            },
            scss: {
                // https://github.com/vitejs/vite/issues/520
                additionalData: `@import "src/styles/global.scss";`,
            }
        },
        optimizeDeps: {
            link: [],
            include: [],
            allowNodeBuiltins: [],
            exclude: []
        },
        terserOptions: {
            compress: {
                keep_infinity: true
            }
        },
        rollupOutputOptions: {
            preserveEntrySignatures: 'strict',
            entryFileNames: '[name].js',
            chunkFileNames: '[name].js',
            assetFileNames: '[name].[ext]',
            manualChunks(id) {
                if (id.includes('/node_modules/')) {
                    const expansions = []
                    if (expansions.some(exp => id.includes(`/node_modules/${exp}`))) {
                        return 'expansion'
                    } else {
                        return 'vendor'
                    }
                }
            }
        },
        shouldPreload(chunk) {
            return true
        }
    }
}
