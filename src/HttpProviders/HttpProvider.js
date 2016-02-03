var _provider

export function registerHttpProvider (provider) {
  console.log(provider)
  _provider = provider
}

export function HttpProvider (provider) {
  console.log(_provider)
  return _provider
}
