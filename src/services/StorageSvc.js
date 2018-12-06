
import BaseSvc from './BaseSvc'
import Lockr from 'lockr'

export default class StorageSvc extends BaseSvc {

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  constructor (config) {

    super (config)

    this.currentStorageVersion = config.storageVersion
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  get name () {
    return 'StorageSvc'
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  getStoragekey (key) {
    
    return `${this._config.storageKey}.${key}`
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  save (key, data) {

    const item = Array.isArray(data) 
      ? {__array: data}
      : data

    const versionedItem = { 
      ...item,
      storageVersion: this.currentStorageVersion
    }

    Lockr.set(this.getStoragekey(key), versionedItem)
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  load (key, defaultValue = {}) {

    const storageKey = this.getStoragekey(key)

    const item = Lockr.get(storageKey) || defaultValue

    if (item.storageVersion) {

      if (this.currentStorageVersion > item.storageVersion) {
        return defaultValue
      }
        
      return item.__array || item
    }

    return defaultValue
  }
}
