# Customization of Hexo-Theme-Landscape for Spanner Wingnut's Muddleware Labs #

## DORMANT PROJECT: Preserved for Future Reference ##

## What This Is ##

This project is *not* a fork of the [`hexo-theme-landscape`](https://github.com/hexojs/hexo-theme-landscape) GitHub project.

This project provides source-code management of the `spanner/theme/landscape/` portion as it was initialized by hexo in the desktop compute development location that is source-code managed under the [`hexo-spanner`](https://github.com/orcmid/hexo-spanner) GitHub project.

Since this is customization of `hexo-theme-landscape` specifically for the [Spanner Wingnut Muddleware Labs](http://orcmid.com/BlunderDome/wingnut) blog, it will not be used to provide patches or extensions to the `original hexo-theme-landscape`.  If there is anything to submit upstream, it will be by creation of a separate fork and producing commits to push to that project.

The `README.md` file that was included as part of the default `hexo-spanner` initialization has been replaced by this one.

For details and tests of the customization consult the [Spanner Wingnut](http://orcmid.com/BlunderDome/wingnut) blog.  The hexo-specific  [About](http://orcmid.com/BlunderDome/wingnut/hexo-about/) page will be kept current even if the blog's generation changes in the future.

## Applicable Instructions ##

The following material from the original README.md remail pertinent and has been relied upon.


### Configuration ###

``` yml
# Header
menu:
  Home: /
  Archives: /archives
rss: /atom.xml

# Content
excerpt_link: Read More
fancybox: true

# Sidebar
sidebar: right
widgets:
- category
- tag
- tagcloud
- archives
- recent_posts

# Miscellaneous
google_analytics:
favicon: /favicon.png
twitter:
google_plus:
```

- **menu** - Navigation menu
- **rss** - RSS link
- **excerpt_link** - "Read More" link at the bottom of excerpted articles. `false` to hide the link.
- **fancybox** - Enable [Fancybox]
- **sidebar** - Sidebar style. You can choose `left`, `right`, `bottom` or `false`.
- **widgets** - Widgets displaying in sidebar
- **google_analytics** - Google Analytics ID
- **favicon** - Favicon path
- **twitter** - Twiiter ID
- **google_plus** - Google+ ID


### Fancybox ###

Landscape uses [Fancybox] to showcase your photos. You can use Markdown syntax or fancybox tag plugin to add your photos.

```
![img caption](img url)

{% fancybox img_url [img_thumbnail] [img_caption] %}
```

### Sidebar ###

You can put your sidebar in left side, right side or bottom of your site by editing `sidebar` setting.

Landscape provides 5 built-in widgets:

- category
- tag
- tagcloud
- archives
- recent_posts

All of them are enabled by default. You can edit them in `widget` setting.


### Dependencies ###

- [Grunt] 0.4+
- Hexo 2.4+

[Hexo]: https://hexo.io/
[Fancybox]: http://fancyapps.com/fancybox/
[Font Awesome]: http://fontawesome.io/
[Grunt]: http://gruntjs.com/
[hexo-generate-feed]: https://github.com/hexojs/hexo-generator-feed

----

 * 1.0.1 2017-12-24-14:13 Restatement for hexo-theme-landscape-wingnut.
 * 1.0.0 2017-12-11-13:37 Default initial install of hexo-theme-landscape 0.0.2.
