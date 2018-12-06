import ViewerCommand from 'Viewer.Command'
import HotSpot from './HotSpot'

export default class HotSpotCommand extends ViewerCommand {

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  constructor (viewer, options = {}) {

    super (viewer, {
      commandId: 'HotSpot'
    })

    this.options = options

    if (options.parentControl && options.hotspots.length) {

      this.control = this.createButtonControl({
        parentControl: options.parentControl,
        caption: 'Toggle hotspots',
        icon: 'fa fa-podcast',
        id: 'toolbar-hotspot',
        handler: () => {
          this.commandTool.active
            ? this.commandTool.deactivate()
            : this.commandTool.activate()
        }
      })
    }

    this.commandTool.on('activate', () => {

      if (this.control) {

        this.control.container.classList.add('active')
      }

      if (options.hotspots) {

        options.hotspots.forEach((data) => {

          this.createHotSpot (data)
        })
      }

      if (options.animate) {

        this.animate()
      }

      this.emit('activate')
    })

    this.commandTool.on('deactivate', () => {

      if (this.control) {

        this.control.container.classList.remove('active')
      }

      this.removeHotSpots()

      this.emit('deactivate')
    })

    this.hotspots = []
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  get active() {

    return this.commandTool.active
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  animate () {

    if (this.commandTool.active && !this.animRunning) {

      this.animRunning = true

      const filteredHotspots =
        this.hotspots.filter((hotspot) => {
        return !hotspot.removed
      })

      const tasks = filteredHotspots.map((hotspot) => {
        return hotspot.animate()
      })

      if (this.commandTool.active) {

        Promise.all(tasks).then(() => {
          setTimeout(() => {
            this.animRunning = false
            this.animate()
          }, 100)
        })
      }
    }
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  createHotSpot (data) {

    const hotSpot = new HotSpot(this.viewer, data)

    hotSpot.on('singleclick', (event) => {

      setTimeout(() => {
        $('.tooltip').css({display:'none'})
      }, 850)

      this.emit('hotspot.clicked', hotSpot)
    })

    hotSpot.on('tracker.modified', (event) => {

      $('.tooltip').css({display:'none'})

      this.emit('hotspot.updated', hotSpot, event)
    })

    hotSpot.on('visible', () => {

      this.emit('hotspot.visible', hotSpot)
    })

    this.emit('hotspot.created', hotSpot)

    this.hotspots.push(hotSpot)
  
    return hotSpot
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  removeHotSpots () {

    this.hotspots.forEach((hotSpot) => {

      hotSpot.remove()
    })
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  toArray (obj) {

    return obj ? (Array.isArray(obj) ? obj : [obj]) : []
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  isolate (ids) {

    this.hotspots.forEach((hotspot) => {

      const idArray = this.toArray(ids)

      const show = idArray.includes(hotspot.id)

      if (!hotspot.hidden) {

        hotspot.skipOcclusion = !show

        hotspot.setVisible(show)
      }
    })
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  showAll () {

    this.hotspots.forEach((hotspot) => {

      if (!hotspot.hidden) {

        hotspot.setVisible(true)
      }
    })
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  setVisibility (ids, show) {

    const hotspots = this.hotspots.filter((hotspot) => {

      return ids.includes(hotspot.id)
    })

    hotspots.forEach((hotspot) => {

      if (!hotspot.hidden) {

        hotspot.skipOcclusion = !show

        hotspot.setVisible(show)
      }
    })
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  getHotspotsById (id) {

    const ids = !Array.isArray(id)
      ? [ids]
      : id

    const res = this.hotspots.filter((hotspot) => {
      return ids.includes(hotspot.id)
    })

    return res.length === 1
      ? res[0]
      : res
  }
}
