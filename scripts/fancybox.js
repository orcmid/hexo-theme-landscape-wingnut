var rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/;

/**
* Fancybox tag
*
* Syntax:
*   {% fancybox /path/to/image [/path/to/thumbnail] [title] %}
*/

hexo.extend.tag.register('fancybox', function(args){
  var original = args.shift(),
      thumbnail = '';

  if (args.length && rUrl.test(args[0])) {
     thumbnail = args.shift();
  }

  var title = args.join(' ');

  return '<a class="fancybox" href="' + original + '" title="' + title + '">' +
     '<img src="' + (thumbnail || original) + '" alt="' + title + '">' +
     '</a>' +
     (title ? '<span class="caption">' + title + '</span>' : '');
});

// 1.0.1 2017-12-17-16:52 Adjust some layout and also add missing "+" in
//       return second line found by occar421 at 
//       https://github.com/hexojs/hexo-theme-landscape/pull/99/commits/a9503d3ace9dade33f097f05234d7d36237b88bf
// 1.0.0 2017-12-11-13:37 original from hexo-theme-landscape 0.0.2 in refresh
//       of Spanner Wingnut hexo install.
//                     *** end of fancybox.js ***

