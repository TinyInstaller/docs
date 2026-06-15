import {defineConfig} from 'vitepress'
import {videoEmbed} from "./plugins/videoEmbed";
// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "TinyInstaller",
    description: "Deploy your vps",
    markdown: {
        config(md) {
            md.use(videoEmbed)
        },
    },
    srcExclude: [
        '**/_parts/**',
        '**/_*.md',
    ],
    themeConfig: {

        outline: {
            level: [2, 3]
        },
        search: {
            provider: 'local'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'}
        ],

        sidebar: [
            {
                text: 'Deployment Guides',
                items: [
                    {text: 'Getting Started', link: '/guides/getting-started'},
                    {text: 'DigitalOcean', link: '/guides/usage-on-digitalocean'},
                    {text: 'DigitalOcean (Init Script)', link: '/guides/usage-on-digitalocean-init-script'},
                    {text: 'Vultr', link: '/guides/usage-on-vultr'},
                    {text: 'Linode', link: '/guides/usage-on-linode'},
                    {text: 'Google Cloud', link: '/guides/usage-on-google-cloud'},
                    {text: 'Oracle Cloud', link: '/guides/usage-on-oracle-cloud'},
                    {text: 'AWS', link: '/guides/usage-on-aws'},
                    {text: 'Azure', link: '/guides/usage-on-azure'},
                    {text: 'CloudCone', link: '/guides/usage-on-cloudcone'},
                    {text: 'Racknerd', link: '/guides/usage-on-racknerd'},
                    {text: 'SSD Nodes', link: '/guides/usage-on-ssd-nodes'},
                    {text: 'Kamatera', link: '/guides/usage-on-kamatera'},
                    {text: 'Any Linux VPS', link: '/guides/usage-on-any-linux-vps'},
                    {
                        text: 'Dedicated / Bare-Metal Servers',
                        link: '/guides/using-tinyinstaller-on-dedicated-bare-metal-servers'
                    },
                ]
            },
            {
                text: 'Custom Profiles',
                items: [
                    {text: 'Overview', link: '/custom-profiles/'},
                    {text: 'Add a Custom Profile', link: '/custom-profiles/add-profile'},
                    {text: 'Build a Linux Image', link: '/custom-profiles/build-linux-image'},
                    {text: 'Build a Windows Image', link: '/custom-profiles/build-windows-image'},
                    {text: 'Host an Image', link: '/custom-profiles/host-image'},

                ]
            },
            {
                text: 'Firewall Guides',
                items: [
                    {text: 'Open Firewall on Google Cloud', link: '/firewall/open-firewall-on-google-cloud'},
                    {text: 'Open Firewall on Azure', link: '/firewall/open-firewall-on-azure'},
                    {text: 'Open Firewall on Oracle Cloud', link: '/firewall/open-firewall-on-oracle-cloud'},
                    {text: 'Open Firewall on AWS', link: '/firewall/open-firewall-on-aws'},
                ]
            },
            {
                text: 'Windows',
                items: [
                    {text: 'Change RDP Port', link: '/windows/change-rdp-port'},
                    {
                        text: 'Convert Windows Server Evaluation to Non-Evaluation Edition (Datacenter / Standard)',
                        link: '/windows/convert-edition'
                    },
                ]
            },
            {
                text: 'Payments',
                items: [
                    {text: 'Pay with Binance', link: '/payments/pay-with-binance'},
                ]
            },
            {
                text: 'Api',
                items: [
                    {text: 'Api Requests', link: '/api/api-requests'},
                    {text: 'Build Install Command', link: '/api/build-install-command'},
                ]
            },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
