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
