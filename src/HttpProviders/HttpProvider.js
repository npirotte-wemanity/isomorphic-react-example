var _provider

export function registerHttpProvider (provider) {
  _provider = provider
}

export function HttpProvider (provider) {
  return _provider
}
