import { defineStore } from "pinia";
import { ref } from "vue";

export const useClientsStore = defineStore('clients', () => {
  const clients = ref([])

  const setNewClients = (data) => {
    const newClients = []
    for (let client of data){
      newClients.push({
        name: checkOrganization(client),
        status: client._custom.value.is_active,
        login: client._custom.value.user.credential.email,
        login_name: client._custom.value.user.credential.name,
        password:checkPassword(client),
        phone:checkPhoneNumber(client),
        balance: client._custom.value.balance.toFixed(2),
      })
    }
    console.log(newClients)
    clients.value = newClients
  }

  const getClients = () => {
    return clients.value
  }

  const checkOrganization = (client) => {
    if (client._custom.value.organization) return client._custom.value.organization.name.short_with_opf
    return 'Организация не назначена'
  }

  const checkPassword = (client) => {
    if (client._custom.value.password) return client._custom.value.password
    return 'Не указан'
  }

  const checkPhoneNumber = (client) => {
    if (client._custom.value.user.credential.phone){
      const sourcePhoneNumber = client._custom.value.user.credential.phone.toString()
      if (sourcePhoneNumber.length == 10){
        let formattedPhoneNumber = '+7 (' + sourcePhoneNumber.slice(0,3) + ') ' + sourcePhoneNumber.slice(3,6) + ' ' + sourcePhoneNumber.slice(6,8) + ' ' + sourcePhoneNumber.slice(8,10)
        return formattedPhoneNumber
      }
    }
    return null
  }

  return {
    setNewClients,
    getClients
  }
})