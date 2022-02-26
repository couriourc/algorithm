let url =
  "https://gitbook.cn/gitchat/geekbooks?tag=JavaScript&name=pwwu&age=24";

function getUrlParams() {
  let map = {};

  let paramsPart = url.split("?").slice(-1)[0];

  paramsPart.split("&").forEach((item) => {
    let keyValue = item.split("=");
    map[keyValue[0]] = keyValue[1];
  });
  return map;
}

console.log(getUrlParams(url));
