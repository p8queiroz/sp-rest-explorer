import Vue from 'vue'
import Vuex, { Store, StoreOptions } from 'vuex'
import { UIState, uiModule, uiState } from './modules/ui'
import { NavigationState, navigationModule, navigationState } from './modules/navigation'
import { FiltersState, filtersModule, filterState } from './modules/filters'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export interface IRootState {
  version: string,
  ui: UIState,
  navigation: NavigationState,
  filter: FiltersState
}

const rootState: IRootState = {
  version: '1.0',
  ui: uiState,
  navigation: navigationState,
  filter: filterState
}

const storeOptions: StoreOptions<IRootState> = {
  state: rootState,
  modules: {
    ui: uiModule,
    navigation: navigationModule,
    filter: filtersModule
  },
  strict: debug
}

export default new Store<IRootState>(storeOptions)
