import { isPlainObject } from 'lodash';

export enum DeviceEnum {
  phone = 'phone',
  tablet = 'tablet',
  desktop = 'desktop',
}

export function getDevice(width: number): DeviceEnum {
  const isPhone =
    typeof navigator !== 'undefined' &&
    navigator &&
    navigator.userAgent.match(/phone/gi);

  if (width < 680 || isPhone) {
    return DeviceEnum.phone;
  } else if (width < 1280 && width > 680) {
    return DeviceEnum.tablet;
  } else {
    return DeviceEnum.desktop;
  }
}

/**
 * @description: 把列表通过 key 转换为对象
 * @param key
 * @param list
 */
export function transformListToMap<T = any>(
  key: string | number,
  list: Array<T>,
) {
  if (!Array.isArray(list)) {
    return {};
  }

  return list.reduce((prev, curr) => {
    if (!isPlainObject(curr)) {
      return { ...prev };
    }
    // @ts-ignore
    return { ...prev, [curr[key]]: curr };
  }, {});
}
