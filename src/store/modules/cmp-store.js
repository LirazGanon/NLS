import { cmpService } from '../../services/cmps.service.js'

export const cmpStore = {
    state: {
        cmps: {},
        data: {}
    },
    getters: {
        cmps({ cmps }) { return cmps }
    },
    mutations: {
        setCmps(state, { cmps }) {
            state.cmps = cmps
        },
        applyDrag({ cmps }, { dragResult }) {
            const { removedIndex, addedIndex, payload } = dragResult;
            if (removedIndex === null && addedIndex === null) return cmps;
            const result = [...cmps];
            let itemToAdd = { ...payload };
            if (removedIndex !== null) {

                itemToAdd = result.splice(removedIndex, 1)[0];
            }
            if (addedIndex !== null) {
                itemToAdd.id += this.makeId()
                result.splice(addedIndex, 0, itemToAdd);
            }
            return result;
        },
        setData({ data },{t}){
            
        }

    },
    actions: {
        async loadCmps({ commit }) {
            try {
                const cmps = await cmpService.query()
                commit({ type: 'setCmps', cmps })
            } catch (err) {
                throw err
            }
        },
        async setData({ commit }, { type }) {
            commit({ type: 'setData', t: type })
        }
    },

}