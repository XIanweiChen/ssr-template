import {
  observable, computed, autorun, action,
} from 'mobx'


export class Appstate {
  @observable count = 0

  @observable name = 'cxw'

  @computed get msg() {
    return `${this.name}${this.count}`
  }

  @action add() {
    this.count += 1
  }
}

const appState = new Appstate()

autorun(() => {
  // console.log(appState.msg)
})


// setInterval(() => {
//   appState.add()
// }, 1000)


export default appState
