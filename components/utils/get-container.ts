import { isFunction } from './is';

export type GetContainer = () => HTMLElement;

export function resolveContainer(
  getContainer: HTMLElement | GetContainer | undefined | null
) {
  const container = isFunction(getContainer)
    ? (getContainer as GetContainer)()
    : getContainer;
  return container || document.body;
}
