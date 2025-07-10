export function getPrefixCls(componentName: string, customPrefix?: string) {
  return `${customPrefix || 'pay'}-${componentName}`;
}
