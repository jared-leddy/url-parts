function getUrlParts(url) {
  var a = document.createElement('a');
  a.href = url;

  return {
      href: a.href,
      host: a.host,
      hostname: a.hostname,
      port: a.port,
      pathname: a.pathname,
      protocol: a.protocol,
      hash: a.hash,
      search: a.search
  };
}
const lastAbsoluteURL = document.referrer;
const lastRelativeURL = getUrlParts(lastAbsoluteURL).pathname;
