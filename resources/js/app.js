import './bootstrap';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    id: 'app',
    resolve: name => {
        const pages = resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue'))
        return pages
    },
    setup({el, App, props, plugin}) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    }
})