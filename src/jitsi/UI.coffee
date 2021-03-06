EventEmitter = require 'events'
UIEvents = require 'jitsi-meet/service/UI/UIEvents'

eventEmitter = new EventEmitter

UI =
  addListener: (type, listener) ->
    eventEmitter.on type, listener
  emit: (type, params...)->
    eventEmitter.emit type, params...

  #RTC.js listens for these events
  onMainVideoUpdated: (resourceJid) ->
    eventEmitter.emit(UIEvents.SELECTED_ENDPOINT, resourceJid)
  onVideoPinned: (resourceJid) ->
    eventEmitter.emit(UIEvents.PINNED_ENDPOINT, resourceJid)
  onVideoUnpinned: ->
    eventEmitter.emit(UIEvents.PINNED_ENDPOINT)

module.exports = UI