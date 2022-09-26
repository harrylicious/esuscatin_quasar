import Vue from 'vue'
import { firebaseAuth, firebaseDb } from 'boot/firebase'

let messagesRef

const state = {
	userDetails: {},
	users: {},
  usersFiltered: {},
	messages: {}
}
const mutations = {
	setUserDetails(state, payload) {
		state.userDetails = payload
	},
	addUser(state, payload) {
		Vue.set(state.users, payload.userId, payload.userDetails)
	},
  filteredUser(state, payload) {
		Vue.set(state.usersFiltered, payload.userId, payload.userDetails)
	},
	updateUser(state, payload) {
		Object.assign(state.users[payload.userId], payload.userDetails)
	},
	addMessage(state, payload) {
		Vue.set(state.messages, payload.messageId, payload.messageDetails)
	},
	clearMessages(state) {
		state.messages = {}
	}
}
const actions = {
  getUsersByRegisteredDate() {
    console.log('TEST')


  },
	registerUser({}, payload) {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let dateOfString = (("" + day).length < 2 ? "0" : "") + day + "/";
    dateOfString += (("" + month).length < 2 ? "0" : "") + month + "/";
    dateOfString += date.getFullYear() + " ";
    dateOfString += (("" + date.getHours()).length < 2 ? "0" : "") + date.getHours() + ":"
    dateOfString += date.getMinutes() + ":"
    dateOfString += date.getSeconds()

		firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
			.then(response => {
				console.log(response)
				let userId = firebaseAuth.currentUser.uid
				firebaseDb.ref('users/' + userId).set({
          created_at: dateOfString,
					name: payload.name,
					email: payload.email,
					address: payload.address,
					phone: payload.phone,
					level: payload.level,
					online: true
				})
			})
			.catch(error => {
				console.log(error.message)
			})
	},
	loginUser({}, payload) {
		firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error.message)
			})
	},
	logoutUser() {
		firebaseAuth.signOut()
	},
	handleAuthStateChanged({ commit, dispatch, state }) {
		firebaseAuth.onAuthStateChanged(user => {
		  if (user) {
		    // User is logged in.
		    let userId = firebaseAuth.currentUser.uid
		    firebaseDb.ref('users/' + userId).once('value', snapshot => {
		    	let userDetails = snapshot.val()

		    	commit('setUserDetails', {
            created_at: userDetails.created_at,
		    		name: userDetails.name,
		    		email: userDetails.email,
            address: userDetails.address,
            phone: userDetails.phone,
            level: userDetails.level,
		    		userId: userId
		    	})
		    })
		    dispatch('firebaseUpdateUser', {
		    	userId: userId,
		    	updates: {
		    		online: true
		    	}
		    })
		    dispatch('firebaseGetUsers')
        this.$router.push('/home')

        dispatch('firebaseGetUsersByDatetime')
        this.$router.push('/detailreport')

		  }
		  else {
		  	// User is logged out.
		  	dispatch('firebaseUpdateUser', {
		  		userId: state.userDetails.userId,
		  		updates: {
		  			online: false
		  		}
		  	})
		  	commit('setUserDetails', {})
		  	this.$router.replace('/auth')
		  }
		})
	},

	firebaseUpdateUser({}, payload) {
		if (payload.userId) {
			firebaseDb.ref('users/' + payload.userId).update(payload.updates)
		}
	},
	firebaseGetUsers({ commit }) {
		firebaseDb.ref('users').on('child_added', snapshot => {
			let userDetails = snapshot.val()
			let userId = snapshot.key
      // level = userDetails.level
      // console.log(userDetails.level)
			commit('addUser', {
				userId,
				userDetails
			})
		})
		firebaseDb.ref('users').on('child_changed', snapshot => {
			let userDetails = snapshot.val()
			let userId = snapshot.key
			commit('updateUser', {
				userId,
				userDetails
			})
		})
	},
  firebaseGetUsersByDatetime({ commit }, payload) {
		firebaseDb.ref('users').on('child_added', snapshot => {
		let userDetails = snapshot.val()
		let userId = snapshot.key
      // level = userDetails.level


      if ((payload == Number(userDetails.created_at.substring(3, 5)))) {
		userDetails = null
        commit('filteredUser', {
          userId,
          userDetails
        })

      console.log(userDetails)
      }

      console.log("Payload: " + payload)
		})
	},
	firebaseGetMessages({ commit, state }, otherUserId) {
		let userId = state.userDetails.userId
		messagesRef = firebaseDb.ref('chats/' + userId + '/' + otherUserId)
		messagesRef.on('child_added', snapshot => {
			let messageDetails = snapshot.val()
			let messageId = snapshot.key
			commit('addMessage', {
				messageId,
				messageDetails
			})
		})
	},
	firebaseStopGettingMessages({ commit }) {
		if (messagesRef) {
			messagesRef.off('child_added')
			commit('clearMessages')
		}
	},
	firebaseSendMessage({}, payload) {
		firebaseDb.ref('chats/' + state.userDetails.userId + '/' + payload.otherUserId).push(payload.message)

		payload.message.from = 'them'
		firebaseDb.ref('chats/' + payload.otherUserId + '/' + state.userDetails.userId).push(payload.message)
	}
}
const getters = {
	users: state => {
		let users = {}
		Object.keys(state.users).forEach(key => {
			if (key !== state.userDetails.userId) {
				users[key] = state.users[key]
			}
		})
		return users
	},
  usersFiltered: state => {
		let usersFiltered = {}
		Object.keys(state.usersFiltered).forEach(key => {
			if (key !== state.userDetails.userId) {
				usersFiltered[key] = state.usersFiltered[key]
			}
		})
		return usersFiltered
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
