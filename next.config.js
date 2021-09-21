const securityHeaders = [
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
    },
    {
        key: 'Content-Security-Policy',
        value: 'default-src \'self\'; font-src \'self\' https://fonts.googleapis.com https://fonts.gstatic.com; img-src \'self\' data:; object-src \'none\'; script-src \'self\'; style-src \'self\' \'unsafe-inline\' https://fonts.googleapis.com https://fonts.gstatic.com',
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    },
    {
        key: 'X-Frame-Options',
        value: 'DENY',
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
    },
];
const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        loader: 'imgix',
        path: '',
    },
    async headers() {
        if (process.env.NODE_ENV === 'production') {
            return [
                {
                    // Apply these headers to all routes in your application.
                    source: '/(.*)',
                    headers: securityHeaders,
                },
            ];
        }
        return [];
    },
};


