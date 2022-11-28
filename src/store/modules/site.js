import { cmpService } from '../../services/cmps.service.js'

export const siteStore = {
    state: {
        site: {}
    },
    getters: {
        site({ site }) { return site }
    },
    mutations: {
        setSite(state, { site }) {
            state.site = site
        },
        applyDrag({ site }, { dragResult }) {
            const { removedIndex, addedIndex, payload } = dragResult;
            if (removedIndex === null && addedIndex === null) return site;
            const result = [...site];
            let itemToAdd = { ...payload };
            if (removedIndex !== null) {

                itemToAdd = result.splice(removedIndex, 1)[0];
            }
            if (addedIndex !== null) {
                itemToAdd.id += Date.now() / 1500
                result.splice(addedIndex, 0, itemToAdd);
            }
            return result;
        },
    },
    actions: {
        async loadSite({ commit }) {
            try {
                const site = await cmpService.getDemoSite()
                commit({ type: 'setSite', site })
            } catch (err) {
                throw err
            }
        },
        async onDrop({ commit }, { dragResult }) {
            try {
                commit({ type: 'applyDrag', dragResult })
            } catch (err) {
                throw err
            }
        }
    },

}