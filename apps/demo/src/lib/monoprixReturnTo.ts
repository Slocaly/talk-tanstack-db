const STORAGE_KEY = 'monoprix-return-to';
const DEFAULT_RETURN_TO = '/tsq';

export function setMonoprixReturnTo(pathname: string) {
  sessionStorage.setItem(STORAGE_KEY, pathname);
}

export function getMonoprixReturnTo(): string {
  return sessionStorage.getItem(STORAGE_KEY) ?? DEFAULT_RETURN_TO;
}
