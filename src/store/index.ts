import { createStore,Store, useStore as  baseUseStore,GetterTree,ActionTree,MutationTree} from 'vuex'
import { InjectionKey } from 'vue'
import axios  from 'axios'
export type Concert = {
    id: number,
    name: string,
    description: string,
    image: string,
    date : string,
    heure : string,
    categorie_id : number,
    user_id : number,
}

export type User = {
  id: number,
  name: string,
  password: string,
  role: string,
  isConnect: boolean
}




export type State = { users: User[], concerts: Concert[] }
const state : State = {
  users : [
          {
          id: 1,
          name: "client",
          password: "client",
          role: "user",
          isConnect: false
        },
        {
          id: 2,
          name: "iutlpro",
          password: "iutlpro",
          role: "admin",  
          isConnect: false
        },
      ],
  concerts : [
    {
      id: 1,
      name: "Eurockéennes",
      description: "Musique rock et electro",
      image: " https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date : "2021-05-05",
      heure : "20:00",
      categorie_id : 3,
      user_id : 1,
    },
    {
      id: 2,
      name: "Festival de Cannes",
      description: "Festival de cinéma",
      image: "https://images.pexels.com/photos/2311713/pexels-photo-2311713.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date : "2023-01-22",
      heure : "23:00",
      categorie_id : 3,
      user_id : 1,
    },
    {
      id: 3,
      name: "fête de la musique",
      description: "fête nationale de la musique",
      image: "https://images.pexels.com/photos/1537638/pexels-photo-1537638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date : "2023-08-12",
      heure : "18:00",
      categorie_id : 3,
      user_id : 1,
    },

  ]


}

const getters: GetterTree<State,State> = {

  //User getters
    getAllUsers: (state) => state.users,
    getUserByName:(state)=> (name:string)=> state.users.find((user)=>user.name===name),
    isConnected:(state)=> state.users.find((user)=>user.isConnect===true),
    
  //Concert getters
    getAllConcerts: (state) => state.concerts,


}

const actions: ActionTree<State,State> = {
  checkUsernamePassword:()=>{
    axios.get('http://localhost:8082 /api/user').then((response)=>{
    alert(response)

    }).catch((error)=>{
      return {"statut":error}
    });
  },

  //concert actions
  deleteConcert({ commit }, concert: Concert) {
    commit("removeConcert", concert.id);
  },
  deleteConcertAxios(state,concert){
    return axios.delete('http://localhost:8082/api/concerts/'+concert.id).then((response)=>{
      if(response.status===200){
        state.commit("removeConcert",concert)
      }else{
        return {"statut":response.status,"message":response.statusText}
      }
    }).catch((error)=>{
      return {"statut":error.response.status,"message":error.response.statusText}
    });
  }
  ,
  addConcertAction({ commit }, concert: Concert) {
    commit("addConcertMutation", concert);
  },

  addConcertAxios(state,concert){
    return axios.post('http://localhost:8082/api/concerts',concert).then((response)=>{
      if(response.status===200){
        state.commit("addConcertMutation",concert)
      }else{
        return {"statut":response.status,"message":response.statusText}
      }
    }).catch((error)=>{
      return {"statut":error.response.status,"message":error.response.statusText}
    });
  },

  
  updateConcertAction({ commit }, concert: Concert) {
    commit("updateConcertMutation", concert);
  },

  updateConcertAxios(state,concert){
    return axios.put('http://localhost:8082/api/concerts/'+concert.id,concert).then((response)=>{
      if(response.status===200){
        state.commit("updateConcertMutation",concert)
      }else{
        return {"statut":response.status,"message":response.statusText}
      }
    }).catch((error)=>{
      return {"statut":error.response.status,"message":error.response.statusText}
    });
  },

  deleteUser({ commit }, userId: number) {
    commit("removeUser", userId);
  },

  deleteUserAxios(state,user){
    return axios.delete('http://localhost:8082/api/users/'+user.id).then((response)=>{
      if(response.status===200){
        state.commit("removeUser",user)
      }else{
        return {"statut":response.status,"message":response.statusText}
      }
    }).catch((error)=>{
      return {"statut":error.response.status,"message":error.response.statusText}
    });
  }
  ,
  
    

}
 
const mutations: MutationTree<State> = {
  removeConcert(state, id: number) {
    const index = state.concerts.findIndex((concert) => concert.id === id);
    if (index !== -1) {
      state.concerts.splice(index, 1);
    }
  },
  addConcertMutation(state, concert: Concert) {
    state.concerts.push(concert);
  },
  updateConcertMutation(state, concert: Concert) {
    const index = state.concerts.findIndex((c) => c.id === concert.id);
    if (index !== -1) {
      state.concerts[index] = concert;
    }
  },
  removeUser(state, id: number) {
    const index = state.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      state.users.splice(index, 1);
    }
  },
}




export const store: Store<State> = createStore({state,getters,actions,mutations})
export const key:InjectionKey<Store<State> > = Symbol()
export function useStore() {

    return baseUseStore(key)
}