export const normalizePath = (path: string): string => {
  let normalizedPath = path
    .replace(/^\.\/pages/, "")
    .replace(/\.(t|j)sx?$/, "");

  normalizedPath = normalizedPath.replace(/\/index$/i, "/");

  normalizedPath = normalizedPath.replace(
    /\[(?:[.]{3})?(\w+?)\]/g,
    (_match, param) => `:${param}`
  );

  normalizedPath = normalizedPath.replace(
    /\[\[([.\w]+?)\]\]/g,
    (_match, param) => `:${param}*`
  );

  if (normalizedPath.endsWith("/") && normalizedPath !== "/") {
    normalizedPath = normalizedPath.slice(0, -1);
  }

  return normalizedPath;
};
