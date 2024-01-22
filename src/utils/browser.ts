/**
 * 移除 localStorage 里以特定 prefix 开头的数据
 * @param prefix
 */
export function removeLocalStorageByPrefix(prefix: string) {
  try {
    Object.keys(localStorage)
      .filter((key) => key.startsWith(prefix))
      .forEach((key) => {
        localStorage.removeItem(key);
      });
  } catch (err) {
    console.log(err);
  }
}

/**
 * 安全地从 localStorage 里获取数据
 * @param key
 * @param defaultValue
 */
export function safeGetLocalStorage(key: string, defaultValue: any) {
  try {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return value;
  } catch (err) {
    console.log(err);
    return defaultValue;
  }
}

/**
 * 安全地往 localStorage 里存数据
 * @param key
 * @param value
 * @param clearPrefix
 */
export function safeSetLocalStorage(key: string, value: any, clearPrefix = '') {
  try {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  } catch (err) {
    // 如果存储失败，继续清掉以 clearPrefix 开头的数据
    removeLocalStorageByPrefix(clearPrefix);
    // 再存一次
    localStorage.setItem(key, value);
  }
}
