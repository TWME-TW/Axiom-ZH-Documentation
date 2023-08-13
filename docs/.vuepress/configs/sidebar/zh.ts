import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = [
    '/intro/intro.md', //介绍
    '/builder/intro.md', //建筑模式
    {
        text: '功能',
        link: '/capabilities/intro.html',
        children: [
            '/capabilities/tinker.md',
            '/capabilities/noupdates.md',
            '/capabilities/forceplace.md',
            '/capabilities/replacemode.md',
            '/capabilities/bulldozer.md',
            '/capabilities/enhancedflight.md',
        ],
    }, {
        text: '编辑器模式',
        link: '/editor/intro.html',
        children: [
            '/editor/mainmenubar.md',
            '/editor/clipboardandplacements.md',
            '/editor/selections.md',
            '/editor/gizmos.md',
            '/editor/blueprints.md',
            '/editor/views.md',
            '/editor/toolmasks.md',
            '/editor/activeblock.md',
            '/editor/targetinfo.md',
            '/editor/history.md',
            '/editor/worldproperties.md',
        ],
    }, {
        text: '工具',
        link: '/tools/intro.html',
        children: [
            {
                // text: 'github',
                link: '/tools/selection/intro.md',
                children: [
                    '/tools/selection/boxselect.md',
                    '/tools/selection/magicselect.md',
                    '/tools/selection/freehandselect.md',
                ],
            }, {
                link: '/tools/painting/intro.md',
                children: [
                    '/tools/painting/painter.md',
                    '/tools/painting/noisepainter.md',
                    '/tools/painting/biomepainter.md',
                    '/tools/painting/clentaminator.md',
                ],
            }, {
                link: '/tools/drawing/intro.md',
                children: [
                    '/tools/drawing/freehanddraw.md',
                    '/tools/drawing/sculptdraw.md',
                    '/tools/drawing/rock.md',
                    '/tools/drawing/weld.md',
                    '/tools/drawing/melt.md',
                    '/tools/drawing/text.md',
                ],
            }, {
                link: '/tools/heightmap/intro.md',
                children: [
                    '/tools/heightmap/elevation.md',
                    '/tools/heightmap/flatten.md',
                    '/tools/heightmap/slope.md',
                ],
            }, {
                link: '/tools/manipulation/intro.md',
                children: [
                    '/tools/manipulation/smooth.md',
                    '/tools/manipulation/distort.md',
                    '/tools/manipulation/roughen.md',
                    '/tools/manipulation/shatter.md',
                    '/tools/manipulation/extrude.md',
                ],
            },
            '/tools/ruler.md',
        ],
    },
]